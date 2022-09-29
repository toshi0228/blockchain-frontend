---
to: src/api/<%= h.changeCase.camel(name)%>Api/req/req.<%= h.changeCase.camel(name)%>.ts
unless_exists: true
---

export type Create<%= h.changeCase.pascal(name) %>Request = {}

export type Update<%= h.changeCase.pascal(name) %>Request = {}

