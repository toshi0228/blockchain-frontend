---
to: src/helpers/index.ts
unless_exists: true
inject: true
append: dependencies
---

export * from "./helpers.<%= h.changeCase.lower(name)%>"