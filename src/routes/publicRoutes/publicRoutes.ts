import { path } from "config";

import Top from "pages/User/MainPage/Top";
import Setting from "pages/User/MyPage/Setting";
import Login from "pages/User/Auth/Login";
import SignUp from "pages/User/Auth/SignUp";
import Transaction from "pages/User/MainPage/Transaction";

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
