const routeLinkList = {
  Auth: {
    Login: '/login',
    Register: '/register',
  },
  Home: '/',
  Events: '/events',
  CreateEvent: '/createEvent',
  NotAuthorized: '/not-authorized',
  NonAuthPageNotFound: '/*',
  MyProfile: '/MyProfile',
  Manage: '/manage',
}

const params = {
  EventId: 'eventid',
}

export { routeLinkList, params }
