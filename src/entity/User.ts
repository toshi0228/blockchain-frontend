const storage = window.localStorage;

class User {
  private readonly _name: string;
  private readonly _privateKey: string = "aa";
  private readonly _publicKey: string;

  constructor(name: string, privateKey: string, publicKey: string) {
    this._name = name;
    this._privateKey = privateKey;
    this._publicKey = publicKey;

    storage.setItem("name", name);
    storage.setItem("privateKey", privateKey);
    storage.setItem("publicKey", publicKey);
  }

  static get getName(): string {
    return storage.getItem("name") as string;
  }

  static get privateKey(): string {
    return storage.getItem("privateKey") as string;
  }

  static get publicKey(): string {
    return storage.getItem("publicKey") as string;
  }
}

export default User;
