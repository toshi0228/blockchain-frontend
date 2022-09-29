import ServiceBase from "../api.base";
import { CreateTransactionRequest, UpdateTransactionRequest } from "./req/req.transaction";
import {
  CreateTransactionResponse,
  GetTransactionResponse,
  GetTransactionByIdResponse,
  UpdateTransactionResponse,
  DeleteTransactionByIdResponse,
} from "./res/res.transaction";
import { apiPath } from "config";

/**
 * @class MemberService
 * @extends {Service}
 */
class TransactionService extends ServiceBase {
  /**
   * @param
   */
  async create(data: CreateTransactionRequest, params?: QueryParams) {
    return await this.post<CreateTransactionResponse, CreateTransactionRequest>("***", data, params);
  }

  /**
   * @param
   */
  async getList(params?: QueryParams) {
    return await this.get<GetTransactionResponse>(apiPath.transaction, params);
  }

  /**
   * @param
   */
  async getById(id: string) {
    return await this.get<GetTransactionByIdResponse>(`***/${id}`);
  }

  /**
   * @param
   */
  async update(data: UpdateTransactionRequest) {
    return await this.put<UpdateTransactionResponse, UpdateTransactionRequest>("***", data);
  }

  /**
   * @param
   */
  async deleteById(id: string) {
    return await this.delete<DeleteTransactionByIdResponse>("***", { id });
  }
}

export default new TransactionService();
