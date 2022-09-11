const storage = window.localStorage;

class Wallet {
  constructor(walletAddress: string) {
    this.address = walletAddress;
  }

  static get address(): string {
    return storage.getItem("walletAddress") as string;
  }

  private set address(walletAddress: string) {
    storage.setItem("walletAddress", walletAddress);
  }
}

export default Wallet;
