---
to: src/components/atoms/<%= name %>/<%= property %>/<%= property %>.tsx
unless_exists: true
---
import * as React from 'react';
import { Container } from './<%= property %>.style'

export interface I<%= property %><%= name %>Props {

}

const <%= property %><%= name %>: React.FC<I<%= property %><%= name %>Props> = props => {
  return (
    <Container>

    </Container>
  )
};

export default <%= property %><%= name %>;
