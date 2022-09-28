import ServiceBase from "./apis.base";
import {
  CreateBlockResponse,
  CreateBlockRequest,
  GetBlockResponse,
  GetBlockByIdResponse,
  UpdateBlockResponse,
  UpdateBlockRequest,
  DeleteBlockByIdResponse,
} from "interfaces";
import { apis } from "../config";

/**
 * @class MemberService
 * @extends {Service}
 */
class BlockService extends ServiceBase {
  /**
   * @param
   */
  async create(data: CreateBlockRequest) {
    return await this.post<CreateBlockResponse, CreateBlockRequest>(apis.block, data);
  }

  /**
   * @param
   */
  async getList(params?: QueryParams) {
    return await this.get<GetBlockResponse>("***", params);
  }

  /**
   * @param
   */
  async getById(id: string) {
    return await this.get<GetBlockByIdResponse>(`***/${id}`);
  }

  /**
   * @param
   */
  async update(data: UpdateBlockRequest) {
    return await this.put<UpdateBlockResponse, UpdateBlockRequest>("***", data);
  }

  /**
   * @param
   */
  async deleteById(id: string) {
    return await this.delete<DeleteBlockByIdResponse>("***", { id });
  }
}

export default new BlockService();
