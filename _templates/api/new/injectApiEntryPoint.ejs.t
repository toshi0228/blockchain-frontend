---
to: src/api/<%= h.changeCase.camel(name)%>Api/index.ts
unless_exists: true
inject: true
append: dependencies
---

export * from "./req/req.<%= h.changeCase.camel(name) %>";
export * from "./res/res.<%= h.changeCase.camel(name) %>";
