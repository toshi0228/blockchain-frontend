import * as React from "react";
import { useEffect } from "react";
import * as api from "api";

import { Container } from "./style";

export interface ITransactionProps {}

const Transaction: React.FC<ITransactionProps> = (props) => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log("init");
    api.transaction
      .getList()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return <Container>トランザクション</Container>;
};

export default Transaction;
