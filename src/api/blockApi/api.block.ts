import ServiceBase from "../api.base";
import { CreateBlockRequest } from "./req/req.block";
import { CreateBlockResponse, GetBlockResponse, GetVerifyBlockResponse } from "./res/res.block";
import { apiPath } from "config";

class BlockService extends ServiceBase {
  async create(data: CreateBlockRequest) {
    return await this.post<CreateBlockResponse, CreateBlockRequest>(apiPath.block, data);
  }

  async getList(params?: QueryParams) {
    return await this.get<GetBlockResponse>(apiPath.block, params);
  }

  //===========================================================
  //　ブロックが正しいか検証
  //===========================================================
  async verify(params?: QueryParams) {
    return await this.get<GetVerifyBlockResponse>(apiPath.blockVerify, params);
  }
}

export default new BlockService();
