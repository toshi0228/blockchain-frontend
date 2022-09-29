---
to: src/helper/index.ts
unless_exists: true
inject: true
append: dependencies
---

export * from "./helper.<%= h.changeCase.lower(name)%>"
