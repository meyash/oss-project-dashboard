// import Index from 'views/Index.jsx';
// import Profile from "views/examples/Profile.jsx";
// import Maps from "views/examples/Maps.jsx";
// import Register from "views/examples/Register.jsx";
import Login from 'views/Login.jsx';
// import Tables from "views/examples/Tables.jsx";
// import Icons from 'argon-dashboard-react/src/views/examples/Icons.jsx';
import Projects from 'views/Projects.jsx';

var routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'ni ni-favourite-28 text-blue',
    component: Projects,
    layout: '/admin',
  },
  // {
  //   path: '/icons',
  //   name: 'Icons',
  //   icon: 'ni ni-planet text-blue',
  //   component: Icons,
  //   layout: '/admin',
  // },
  // {
  //   path: '/index',
  //   name: 'Dashboard',
  //   icon: 'ni ni-tv-2 text-primary',
  //   component: Index,
  //   layout: '/auth',
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  {
    path: '/',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth',
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
