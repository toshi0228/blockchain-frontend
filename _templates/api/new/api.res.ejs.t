---
to: src/api/<%= h.changeCase.camel(name)%>Api/res/res.<%= h.changeCase.camel(name)%>.ts
unless_exists: true
---

export type Get<%= h.changeCase.pascal(name) %>Response = {}[]

export type Get<%= h.changeCase.pascal(name) %>ByIdResponse = {}

export type Create<%= h.changeCase.pascal(name) %>Response = {}

export type Update<%= h.changeCase.pascal(name) %>Response = {}

export type Delete<%= h.changeCase.pascal(name) %>ByIdResponse = {}

