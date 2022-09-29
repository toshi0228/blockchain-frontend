---
to: src/page/<%= dir %>/<%= category %>/<%= name %>/index.tsx
unless_exists: true
---
export { default } from './<%= name %>';
