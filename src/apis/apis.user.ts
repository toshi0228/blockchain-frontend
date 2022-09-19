import ServiceBase from "./apis.base";
import {
  CreateUserResponse,
  CreateUserRequest,
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
    return await this.get<GetUserResponse>(apis.users, params);
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
