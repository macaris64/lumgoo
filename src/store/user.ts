import {makeAutoObservable, observable} from 'mobx';

import User from '@/models/user.model';
import {login, me, register, verify} from "@/utils/user";
import {API_STATES} from "@/utils/api";
import errorMessages from "@/utils/errorMessages";

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
      const user = this.getUser();
      if (token && user) {
        this.setToken(token);
        this.setUser(JSON.parse(user));
        return token
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
      const loginResponse = await login(
          email,
          password
      );
      this.setUser(loginResponse.user);
      this.setToken(loginResponse.token);
    } catch (error) {
      let errorMessage = (error as any).message;
      if (errorMessage === API_STATES.VALIDATION_ERROR) {
        throw new Error(errorMessages.user.U_100);
      } else if (errorMessage === API_STATES.SERVER_ERROR) {
        throw new Error(errorMessages.server.S_100);
      } else if (errorMessage === API_STATES.UNAUTHORIZED_ERROR) {
        throw new Error(errorMessages.user.U_100);
      }
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
      this.setUser(registerResponse.user);
      this.setToken(registerResponse.token);
    } catch (error) {
      let errorMessage = (error as any).message;
      if (errorMessage === API_STATES.VALIDATION_ERROR) {
        throw new Error(errorMessages.user.U_112);
      } else if (errorMessage === API_STATES.CONFLICT_ERROR) {
        throw new Error(errorMessages.user.U_101);
      } else if (errorMessage === API_STATES.SERVER_ERROR) {
        throw new Error(errorMessages.server.S_100);
      }
    }
  }

  async verifyToken() {
    try {
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
    } catch (error) {
      let errorMessage = (error as any).message;
      if (errorMessage === API_STATES.UNAUTHORIZED_ERROR) {
        throw new Error(errorMessages.user.U_112);
      } else if (errorMessage === API_STATES.VALIDATION_ERROR) {
        throw new Error(errorMessages.user.U_101);
      } else if (errorMessage === API_STATES.SERVER_ERROR) {
        throw new Error(errorMessages.server.S_100);
      }
    }
  }

  async getMe() {
    try {
      const token = this.getToken();
      if (!token) {
        this.clearUserData();
        throw new Error('No token found');
      }
      try {
        const meResponse = await me();
        console.log(meResponse)
        //this.setUser(meResponse.user);
        //this.setToken(meResponse.token);
      } catch (error) {
        this.clearUserData();
        throw new Error('Token verification failed');
      }
    } catch (error) {
      let errorMessage = (error as any).message;
      if (errorMessage === API_STATES.UNAUTHORIZED_ERROR) {
        throw new Error(errorMessages.user.U_103);
      } else if (errorMessage === API_STATES.VALIDATION_ERROR) {
        throw new Error(errorMessages.user.U_102);
      } else if (errorMessage === API_STATES.SERVER_ERROR) {
        throw new Error(errorMessages.server.S_100);
      }
    }
  }
}

export const userStore = new UserStore();
