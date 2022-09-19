---
to: src/interfaces/interfaces.<%= h.changeCase.lower(name)%>.ts
unless_exists: true
---

export type Get<%= h.changeCase.pascal(name) %>Response = {

}[]


export interface Get<%= h.changeCase.pascal(name) %>ByIdResponse {

}


export interface Create<%= h.changeCase.pascal(name) %>Response {

}


export interface Create<%= h.changeCase.pascal(name) %>Request {

}


export interface Update<%= h.changeCase.pascal(name) %>Response {

}


export interface Update<%= h.changeCase.pascal(name) %>Request{

}


export interface Delete<%= h.changeCase.pascal(name) %>ByIdResponse {

}

