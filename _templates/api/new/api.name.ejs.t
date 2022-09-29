---
to: src/api/<%= h.changeCase.camel(name)%>Api/api.<%= h.changeCase.camel(name)%>.ts
unless_exists: true
---

import ServiceBase from "../api.base";
import { Create<%= h.changeCase.pascal(name) %>Request, Update<%= h.changeCase.pascal(name) %>Request } from  "./req/req.<%= h.changeCase.camel(name)%>";
import {
    Create<%= h.changeCase.pascal(name) %>Response,
    Get<%= h.changeCase.pascal(name) %>Response,
    Get<%= h.changeCase.pascal(name) %>ByIdResponse,
    Update<%= h.changeCase.pascal(name) %>Response,
    Delete<%= h.changeCase.pascal(name) %>ByIdResponse,
} from  "./res/res.<%= h.changeCase.camel(name)%>";
import { apiPath } from "config";

/**
 * @class MemberService
 * @extends {Service}
 */
class <%= h.changeCase.pascal(name) %>Service extends ServiceBase {

    /**
    * @param
    */
    async create(data: Create<%= h.changeCase.pascal(name) %>Request, params?: QueryParams) {
         return await this.post<Create<%= h.changeCase.pascal(name) %>Response, Create<%= h.changeCase.pascal(name) %>Request>("***", data, params);
    }

    /**
    * @param
    */
    async getList(params?: QueryParams) {
         return await this.get<Get<%= h.changeCase.pascal(name) %>Response>("***", params);
    }

    /**
    * @param
    */
    async getById(id: string) {
         return await this.get<Get<%= h.changeCase.pascal(name) %>ByIdResponse>(`***/${id}`);
    }

    /**
    * @param
    */
    async update(data: Update<%= h.changeCase.pascal(name) %>Request) {
         return await this.put<Update<%= h.changeCase.pascal(name) %>Response,Update<%= h.changeCase.pascal(name) %>Request>("***", data);
    }

    /**
    * @param
    */
    async deleteById(id: string) {
        return await this.delete<Delete<%= h.changeCase.pascal(name) %>ByIdResponse>("***", { id })
    }
}

export default new <%= h.changeCase.pascal(name) %>Service();
