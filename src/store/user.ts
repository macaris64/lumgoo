import {makeAutoObservable, observable} from 'mobx';

import User from '@/models/user.model';
import {login, register, verify} from "@/utils/user";

class UserStore {
  @observable user: User | null = null;
  @observable token: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.rehydrateUser();
  }

  isLoggedIn() {
    return !!this.getUser() && !!this.getToken();
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('user');
    }
    return null;
  }

  removeUser() {
    this.user = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token)
  }

  removeToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  rehydrateUser() {
    if (typeof window !== 'undefined') {
      const token = this.getToken();
      if (token) {
        this.setToken(token);
        return token
        // Optionally, fetch user details from the server using this token
      }
      else {
        this.clearUserData();
        return null;
      }
    }
    else {
      this.clearUserData();
      return null;
    }
  }

  clearUserData() {
    this.removeUser();
    this.removeToken();
  }

  async loginUser(email: string, password: string) {
    try {
      const loginResponse = await login(email, password);
      this.setUser(loginResponse.user);
      this.setToken(loginResponse.token);
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  async registerUser(
      email: string,
      password: string,
      passwordConfirmation: string,
      username: string,
      fullName: string
  ) {
    try {
      const registerResponse = await register(
          email,
          password,
          passwordConfirmation,
          username,
          fullName
      );
      const user = registerResponse.user;
      const token = registerResponse.token;
      this.setUser(user);
      this.setToken(token);
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  async verifyToken() {
    const token = this.getToken();
    if (!token) {
      this.clearUserData();
      throw new Error('No token found');
    }
    try {
      await verify(token);
    } catch (error) {
      this.clearUserData();
      throw new Error('Token verification failed');
    }
  }
}

export const userStore = new UserStore();
