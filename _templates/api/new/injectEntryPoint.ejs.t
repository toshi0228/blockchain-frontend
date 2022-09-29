---
to: src/api/index.ts
unless_exists: true
inject: true
append: dependencies
---

export { default as <%= h.changeCase.camel(name) %> } from "./<%= h.changeCase.camel(name)%>Api/api.<%= h.changeCase.camel(name) %>"
