import { path } from "config";

import Top from "page/User/MainPage/Top";
import Setting from "page/User/MyPage/Setting";
import Login from "page/User/Auth/Login";
import SignUp from "page/User/Auth/SignUp";
import Transaction from "page/User/MainPage/Transaction";
import TransactionPool from "page/User/MainPage/TransactionPool";
import BlockChain from "page/User/MainPage/BlockChain";

const routerPublic = [
  {
    page: Top,
    path: path.root,
  },
  {
    page: Setting,
    path: path.setting,
  },
  {
    page: Login,
    path: path.login,
  },
  {
    page: SignUp,
    path: path.singUp,
  },
  {
    page: Transaction,
    path: path.transaction,
  },
  {
    page: TransactionPool,
    path: path.transactionPool,
  },
  {
    page: BlockChain,
    path: path.block,
  },
];

export default routerPublic;
