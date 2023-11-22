import {makeAutoObservable, observable} from 'mobx';
import { api } from '@/utils/api';

import User from '@/models/user.model';
import {login, verify} from "@/utils/user";

class UserStore {
  @observable user: User | null = null;
  @observable token: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearUserData() {
    this.user = null;
    this.token = null;
    localStorage.removeItem('token');
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
