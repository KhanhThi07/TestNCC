//Layouts
import Home from '~/pages/Home';

//Public Routes
//Router ko cần đăng nhập
const publicRoutes = [{ path: '/', component: Home }];

//Router cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
