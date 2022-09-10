import * as React from "react";

import { Container } from "./style";

export interface ITransactionProps {}

const Transaction: React.FC<ITransactionProps> = (props) => {
  return <Container>トランザクション</Container>;
};

export default Transaction;
