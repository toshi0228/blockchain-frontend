import React, { useEffect, useState } from "react";
import * as api from "api";
import { GetBlockResponse } from "api/blockApi";

import { Container, BlockContainer } from "./style";

export interface IBlockChainProps {}

const BlockChain: React.FC<IBlockChainProps> = (props) => {
  const [getBlockRes, setGetBlockRes] = useState<GetBlockResponse>();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    api.block
      .getList()
      .then((res) => {
        setGetBlockRes(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <h2>ブロックチェーン</h2>

      {getBlockRes?.blockChain.map((b, i) => {
        return (
          <BlockContainer>
            <div>{`一つ前のブロックハッシュ: ${b.previousHash}`}</div>
            <div>{`ブロック番号: ${b.id}`}</div>
            <div>{`ナンス: ${b.nonce}`}</div>
            <div>{`タイムスタンプ: ${b.timestamp}`}</div>
            <div>トランザクション:</div>
            <div>{b.transactions}</div>
            <div>{`ブロックのハッシュ: ${b.hash}`}</div>
          </BlockContainer>
        );
      })}
    </Container>
  );
};

export default BlockChain;
