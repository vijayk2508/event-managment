import routeLinkList from '../constants/routeLinkList'

const routerList = {
  Home: {
    path: routeLinkList.Home,
    exact: true,
    isAuthenticated: false,
    routeComponentParent: 'pages',
    routeComponentPath: 'features/home',
  },
  Events: {
    path: routeLinkList.Events,
    exact: true,
    isAuthenticated: false,
    routeComponentParent: 'pages',
    routeComponentPath: 'features/events/eventDashboard',
  },

  EventDetail: {
    path: `${routeLinkList.Events}/:id`,
    exact: true,
    isAuthenticated: false,
    routeComponentParent: 'pages',
    routeComponentPath: 'features/events/eventDetail',
  },

  CreateEvent: {
    path: `${routeLinkList.CreateEvent}`,
    exact: true,
    isAuthenticated: false,
    routeComponentParent: 'pages',
    routeComponentPath: 'features/events/eventForm',
  },

  MyProfile: {
    path: `${routeLinkList.MyProfile}`,
    exact: true,
    isAuthenticated: false,
    routeComponentParent: 'pages',
    routeComponentPath: 'features/myprofile',
  },

  // NotAuthorized: {
  //   path: `${routeLink.NotAuthorized}`,
  //   exact: true,
  //   isAuthenticated: true,
  //   routeComponentParent: 'pages',
  //   routeComponentPath: 'misc/NotAuthorized',
  // },

  Error404: {
    path: routeLinkList.NonAuthPageNotFound,
    exact: true,
    isAuthenticated: true,
    routeComponentParent: 'pages',
    routeComponentPath: 'misc/error/404',
    fullLayout: true,
  },
}

export default routerList
