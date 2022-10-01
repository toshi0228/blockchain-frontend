import React, { useEffect } from "react";
import * as api from "api";

import { Container } from "./style";

export interface IBlockChainProps {}

const BlockChain: React.FC<IBlockChainProps> = (props) => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    api.block
      .getList()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <h2>ブロックチェーン</h2>
    </Container>
  );
};

export default BlockChain;
