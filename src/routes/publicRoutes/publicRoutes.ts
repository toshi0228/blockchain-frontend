import { path } from "config";

import Top from "page/User/MainPage/Top";
import Setting from "page/User/MyPage/Setting";
import Login from "page/User/Auth/Login";
import SignUp from "page/User/Auth/SignUp";
import Transaction from "page/User/MainPage/Transaction";

const publicRoutes = [
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
];

export default publicRoutes;
