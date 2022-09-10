---
to: src/apis/index.ts
unless_exists: true
inject: true
append: dependencies
---

export { default as <%= h.changeCase.lower(name) %> } from "./apis.<%= h.changeCase.lower(name) %>"