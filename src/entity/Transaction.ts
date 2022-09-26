import { ec } from "elliptic";
import sha256 from "crypto-js/sha256";
import { Buffer } from "buffer";

// @ts-ignore //keccak256でbufferを参照できてなかったので追加
window.Buffer = Buffer;

class Transaction {
  private readonly keyPair: ec.KeyPair; // 秘密鍵、公開鍵のペア
  private readonly hash: string; // ハッシュ(※hex)
  private readonly signature: ec.Signature; // 署名

  constructor(hexPrivateKey: string, plainData: string) {
    // 16進数の秘密鍵から、byte配列を作成
    const privateKey = Buffer.from(hexPrivateKey, "hex");

    // データのハッシュを作成
    const hashDigest = sha256(plainData);
    this.hash = hashDigest.toString();

    // 秘密鍵から公開鍵を作成
    let ecdsa = new ec("secp256k1");
    this.keyPair = ecdsa.keyFromPrivate(privateKey);

    // 署名を作成
    this.signature = this.keyPair.sign(this.hash);
  }

  // 電子署名を取得　※r+sの16進数の文字列
  public getSignatureStr(): string {
    const r = this.signature.r.toString("hex", 64);
    const s = this.signature.s.toString("hex", 64);
    return r + s;
  }

  // ハッシュ値の取得 ※16進数の文字列
  public getHashStr(): string {
    return this.hash;
  }

  // 公開鍵を16進数の文字列
  public getPublicKeyStr(): string {
    const publicKeyByteArray = this.keyPair.getPublic(false, "array");
    // 最初の余計な04を削除
    publicKeyByteArray.shift();
    return Buffer.from(publicKeyByteArray).toString("hex");
  }
}

export default Transaction;
