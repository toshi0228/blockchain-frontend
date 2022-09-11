const storage = window.localStorage;

class User {
  constructor(userName: string) {
    this.userName = userName;
  }

  static get userName(): string {
    return storage.getItem("userName") as string;
  }

  private set userName(userName: string) {
    storage.setItem("userName", userName);
  }
}

export default User;
