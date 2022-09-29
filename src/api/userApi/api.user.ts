import ServiceBase from "../api.base";
import { CreateUserRequest, UpdateUserRequest } from "./req/req.user";
import {
  CreateUserResponse,
  GetUserResponse,
  GetUserByIdResponse,
  UpdateUserResponse,
  DeleteUserByIdResponse,
} from "./res/res.user";
import { apiPath } from "config";

/**
 * @class MemberService
 * @extends {Service}
 */
class UserService extends ServiceBase {
  /**
   * @param
   */
  async create(data: CreateUserRequest, params?: QueryParams) {
    return await this.post<CreateUserResponse, CreateUserRequest>("***", data, params);
  }

  /**
   * @param
   */
  async getList(params?: QueryParams) {
    return await this.get<GetUserResponse>(apiPath.user, params);
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
