import ServiceBase from "./apis.base";
import {
  DeleteUserByIdResponse,
  GetUserByIdResponse,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "interfaces";
import { apiPath } from "../config";

/**
 * @class MemberService
 * @extends {Service}
 */
class UserService extends ServiceBase {
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
