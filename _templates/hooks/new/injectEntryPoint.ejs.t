---
to: src/hooks/index.ts
unless_exists: true
inject: true
append: dependencies
---

export * from "./hooks.use<%= h.changeCase.pascal(name)%>"