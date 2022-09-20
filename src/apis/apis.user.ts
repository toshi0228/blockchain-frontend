import ServiceBase from "./apis.base";
import {
  CreateUserResponse,
  CreateUserRequest,
  LoginUserRequest,
  LoginUserResponse,
  GetUserResponse,
  GetUserByIdResponse,
  UpdateUserResponse,
  UpdateUserRequest,
  DeleteUserByIdResponse,
} from "interfaces";
import { apis } from "../config";

/**
 * @class MemberService
 * @extends {Service}
 */
class UserService extends ServiceBase {
  /**
   *
   */
  constructor() {
    super();
  }

  /**
   * @param
   */
  async login(data: LoginUserRequest, params?: QueryParams) {
    return await this.post<LoginUserResponse, LoginUserRequest>(
      apis.login,
      data,
      params
    );
  }

  async create(data: CreateUserRequest, params?: QueryParams) {
    return await this.post<CreateUserResponse, CreateUserRequest>(
      "***",
      data,
      params
    );
  }

  /**
   * @param
   */
  async getList(params?: QueryParams) {
    return await this.get<GetUserResponse>(apis.user, params);
  }

  /**
   * @param
   */
  async getById(id: string) {
    return await this.get<GetUserByIdResponse>(`***/${id}`);
  }

  /**
   * @param
   */
  async update(data: UpdateUserRequest) {
    return await this.put<UpdateUserResponse, UpdateUserRequest>("***", data);
  }

  /**
   * @param
   */
  async deleteById(id: string) {
    return await this.delete<DeleteUserByIdResponse>("***", { id });
  }
}

export default new UserService();
