import ServiceBase from "./apis.base";
import { SignUpRequest, SignUpResponse, LoginRequest, LoginResponse } from "interfaces";
import { apiPath } from "config";

/**
 * @class MemberService
 * @extends {Service}
 */
class AuthService extends ServiceBase {
  /**
   * @param
   */
  async login(data: LoginRequest) {
    return await this.post<LoginResponse, LoginRequest>(apiPath.authLogin, data);
  }

  /**
   * @param
   */
  async signUp(data: SignUpRequest) {
    return await this.post<SignUpResponse, SignUpRequest>(apiPath.authSignUp, data);
  }
}

export default new AuthService();
