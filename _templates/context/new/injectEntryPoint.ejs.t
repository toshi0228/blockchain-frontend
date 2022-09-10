---
to: src/contexts/index.ts
unless_exists: true
inject: true
append: dependencies
---

export * from "./contexts.<%= h.changeCase.lcFirst(name)%>"