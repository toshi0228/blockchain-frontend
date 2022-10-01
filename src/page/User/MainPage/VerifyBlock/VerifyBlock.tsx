import React, { useEffect, useState } from "react";
import * as api from "api";
import { GetVerifyBlockResponse } from "api/blockApi";

import { Container, BlockContainer } from "./style";

export interface IVerifyBlockProps {}

const VerifyBlock: React.FC<IVerifyBlockProps> = (props) => {
  const [GetVerifyBlockRes, setGetVerifyBlockResponse] = useState<GetVerifyBlockResponse>();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    api.block
      .verify()
      .then((res) => {
        setGetVerifyBlockResponse(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <h2>ブロックチェーンが改竄されてないか確認</h2>
      {GetVerifyBlockRes?.verifyBlockChain.map((b, i) => {
        return (
          <BlockContainer isCleanData={b.isCleanData} key={i.toString()}>
            <div>{`ブロック番号: ${b.id}`}</div>
            <div>{`ブロック番号: ${b.isCleanData}`}</div>
            <div>{`一つ前のブロックハッシュ: ${b.previousHash}`}</div>
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

export default VerifyBlock;
