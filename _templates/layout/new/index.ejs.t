---
to: src/layouts/<%= name %>/index.tsx
unless_exists: true
---
import * as React from 'react';

import { Container } from './style';

export interface I<%= name %>Props {
}

const <%= name %>: React.FC<I<%= name %>Props> = props => {
  return (
    <Container>

    </Container>
  );
};

export default <%= name %>;
