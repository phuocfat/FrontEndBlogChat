import Home from "~/page/Home/index";
import Login from "~/page/Login/index";
import Register from "~/page/Register/index";
import configRoutes from "~/config/index";
const publicRoutes = [
  { path: configRoutes.routes.home, layout: Home },
  { path: configRoutes.routes.login, layout: Login },
  { path: configRoutes.routes.register, layout: Register },
];
const privateRoute = [];
export { publicRoutes, privateRoute };
