import ServiceBase from "../api.base";
import { LoginRequest, SignUpRequest } from "./req/req.auth";
import { SignUpResponse, LoginResponse } from "./res/res.auth";
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
