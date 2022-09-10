import { paths } from "../../config";

import Top from "pages/User/MainPage/Top";
import Setting from "pages/User/MyPage/Setting";
import Login from "pages/User/Auth/Login";
import SignUp from "pages/User/Auth/SignUp";
import Transaction from "pages/User/MainPage/Transaction";

const publicRoutes = [
  {
    page: Top,
    path: paths.root,
  },
  {
    page: Setting,
    path: paths.setting,
  },
  {
    page: Login,
    path: paths.login,
  },
  {
    page: SignUp,
    path: paths.singUp,
  },
  {
    page: Transaction,
    path: paths.transaction,
  },
];

export default publicRoutes;
