---
to: src/components/atoms/<%= name %>/<%= property %>/index.tsx
unless_exists: true
---
export { default } from './<%= property %>';
