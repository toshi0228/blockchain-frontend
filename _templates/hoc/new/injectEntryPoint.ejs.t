---
to: src/hoc/index.tsx
unless_exists: true
inject: true
append: dependencies
---

export { default as <%= name %> } from "./<%= name %>"
