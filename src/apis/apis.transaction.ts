import ServiceBase from "./apis.base";
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  GetTransactionByIdResponse,
  GetTransactionResponse,
} from "interfaces";
import { apiPath } from "config";

/**
 * @class MemberService
 * @extends {Service}
 */
class TransactionService extends ServiceBase {
  /**
   * @param
   */
  async create(data: CreateTransactionRequest) {
    return await this.post<CreateTransactionResponse, CreateTransactionRequest>(apiPath.transaction, data);
  }

  /**
   * @param
   */
  async getList(params?: QueryParams) {
    return await this.get<GetTransactionResponse>("***", params);
  }

  /**
   * @param
   */
  async getById(id: string) {
    return await this.get<GetTransactionByIdResponse>(`***/${id}`);
  }
}

export default new TransactionService();
