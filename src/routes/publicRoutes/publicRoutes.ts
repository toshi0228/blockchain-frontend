import * as config from "config";
import Top from "pages/User/MainPage/Top";
import Setting from "pages/User/MyPage/Setting";

const publicRoutes = [
  {
    page: Top,
    path: config.paths.root,
  },
  {
    page: Setting,
    path: config.paths.setting,
  },
];

export default publicRoutes;
