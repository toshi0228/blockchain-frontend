---
to: src/interfaces/index.ts
unless_exists: true
inject: true
append: dependencies
---

export * from "./interfaces.<%= h.changeCase.lower(name) %>"