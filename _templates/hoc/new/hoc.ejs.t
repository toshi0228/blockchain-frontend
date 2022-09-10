---
to: src/hoc/<%= name %>/<%= name %>.tsx
unless_exists: true
---
import * as React from 'react';
import styled from 'styled-components';
import { Container } from './<%= name %>.style'

export interface I<%= name %>Props {

}

const <%= name %>: React.FC<I<%= name %>Props> = props => {
  return (
    <Container>

    </Container>
  )
};

export default <%= name %>;
