---
to: src/uiParts/index.ts
unless_exists: true
inject: true
append: dependencies
---

export { default as <%= name %> } from "./<%= name %>"
