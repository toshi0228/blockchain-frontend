import * as React from "react";

import { Container } from "./style";

export interface ITransactionPoolProps {}

const TransactionPool: React.FC<ITransactionPoolProps> = (props) => {
  return <Container>トランザクションプール</Container>;
};

export default TransactionPool;
