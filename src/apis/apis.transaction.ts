import ServiceBase from "./apis.base";
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  GetTransactionByIdResponse,
  GetTransactionResponse,
} from "interfaces";
import { apis } from "../config";

/**
 * @class MemberService
 * @extends {Service}
 */
class TransactionService extends ServiceBase {
  /**
   * @param
   */
  async create(data: CreateTransactionRequest) {
    return await this.post<CreateTransactionResponse, CreateTransactionRequest>(apis.transaction, data);
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
