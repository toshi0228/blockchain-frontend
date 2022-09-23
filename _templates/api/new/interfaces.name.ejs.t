---
to: src/interfaces/interfaces.<%= h.changeCase.lower(name)%>.ts
unless_exists: true
---

export type Get<%= h.changeCase.pascal(name) %>Response = {}[]

export type Get<%= h.changeCase.pascal(name) %>ByIdResponse = {}

export type Create<%= h.changeCase.pascal(name) %>Response = {}

export type Create<%= h.changeCase.pascal(name) %>Request = {}

export type Update<%= h.changeCase.pascal(name) %>Response = {}

export type Update<%= h.changeCase.pascal(name) %>Request = {}

export type Delete<%= h.changeCase.pascal(name) %>ByIdResponse = {}

