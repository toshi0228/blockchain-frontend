---
to: src/components/atoms/index.ts
unless_exists: true
inject: true
append: dependencies
---

export { default as <%= property %><%= name %> } from "./<%= name %>/<%= property %>"
