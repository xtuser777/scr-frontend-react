interface UserToken {
  token: string;
  user: {
    id: number;
    login: string;
    name: string;
    level: number;
  };
}

export class Security {
  static set(user: UserToken, token: string) {
    const data = JSON.stringify(user);

    localStorage.setItem('scr_user', btoa(data));
    localStorage.setItem('scr_token', token);
  }

  static setUser(user: UserToken) {
    const data = JSON.stringify(user);

    localStorage.setItem('scr_user', btoa(data));
  }

  static setToken(token: string) {
    localStorage.setItem('scr_token', token);
  }

  static getUser() {
    const data = localStorage.getItem('scr_user');
    if (data) return JSON.parse(atob(data));
    else return null;
  }

  static getToken() {
    const data = localStorage.getItem('scr_token');
    if (data) return data;
    else return null;
  }

  static hasToken() {
    if (this.getToken()) return true;
    else return false;
  }

  static clear() {
    localStorage.removeItem('scr_user');
    localStorage.removeItem('scr_token');
  }
}
