import ServiceBase from "../api.base";
import { CreateTransactionPoolRequest, UpdateTransactionPoolRequest } from  "./req/req.transactionPool";
import {
    CreateTransactionPoolResponse,
    GetTransactionPoolResponse,
    GetTransactionPoolByIdResponse,
    UpdateTransactionPoolResponse,
    DeleteTransactionPoolByIdResponse,
} from  "./res/res.transactionPool";
import { apiPath } from "config";

/**
 * @class MemberService
 * @extends {Service}
 */
class TransactionPoolService extends ServiceBase {

    /**
    * @param
    */
    async create(data: CreateTransactionPoolRequest, params?: QueryParams) {
         return await this.post<CreateTransactionPoolResponse, CreateTransactionPoolRequest>("***", data, params);
    }

    /**
    * @param
    */
    async getList(params?: QueryParams) {
         return await this.get<GetTransactionPoolResponse>("***", params);
    }

    /**
    * @param
    */
    async getById(id: string) {
         return await this.get<GetTransactionPoolByIdResponse>(`***/${id}`);
    }

    /**
    * @param
    */
    async update(data: UpdateTransactionPoolRequest) {
         return await this.put<UpdateTransactionPoolResponse,UpdateTransactionPoolRequest>("***", data);
    }

    /**
    * @param
    */
    async deleteById(id: string) {
        return await this.delete<DeleteTransactionPoolByIdResponse>("***", { id })
    }
}

export default new TransactionPoolService();
