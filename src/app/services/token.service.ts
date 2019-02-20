import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const TOKEN_KEY = 'authToken';
const USER_KEY = 'user';
const ROLE_KEY = 'role';

@Injectable()
export class TokenService {

    constructor() {}

    hasToken() {
      return true;
      // return !!this.getToken();
    }

    setToken(headers) {
        const token = headers.headers.get('x-ecams-token');
        const user = headers.headers.get('x-ecams-user');
        const role = headers.headers.get('x-ecams-role');

        sessionStorage.setItem(TOKEN_KEY, token);
        sessionStorage.setItem(ROLE_KEY, role);
        this.setUSer(user);
    }

    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    setUSer(user) {
        sessionStorage.setItem(USER_KEY, user);
    }

    getUser() {
        return sessionStorage.getItem(USER_KEY);
    }

    isAdmin() {
        return sessionStorage.getItem(ROLE_KEY) && sessionStorage.getItem(ROLE_KEY) === 'true';
    }

    removeToken() {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(USER_KEY);
        sessionStorage.removeItem(ROLE_KEY);
    }

    getHeader() {
        return new HttpHeaders(this.hasToken() ? {
            'x-ecams-token': this.getToken()
        } : {});
    }
}
