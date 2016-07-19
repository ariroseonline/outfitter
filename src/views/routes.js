import { isAuthenticated } from 'src/core/auth';
import App from './app';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import Outfits from './pages/outfits';
import Outfit from './pages/outfit';
import FilterType from './pages/filter-type';
import Filter from './pages/filter';
import NewFilter from './pages/new-filter';

// import Articles from './pages/articles';
// import Article from './pages/article';
// import Weathers from './pages/weathers';
// import Weather from './pages/weather';
// import Temperatures from './pages/temperatures';
// import Temperature from './pages/temperature';
// import Activities from './pages/activities';
// import Activity from './pages/activity';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  OUTFITS: '/outfits',
  OUTFIT: '/outfit',
  FILTER_TYPE: '/filters/:filterType',
  FILTER: '/filters/:filterType/:filterName',
  NEW_FILTER: '/filters/:filterType/new'

  // NEW_OUTFIT: '/outfits/new',
  // ARTICLES: '/articles',
  // ARTICLE: '/article',
  // NEW_ARTICLE: '/articles/new',
  // WEATHERS: '/weathers',
  // WEATHER: '/weather',
  // NEW_WEATHER: '/weathers/new',
  // TEMPERATURES: '/temperatures',
  // TEMPERATURE: '/temperature',
  // NEW_TEMPERATURE: '/temperatures/new',
  // ACTIVITIES: '/activities',
  // ACTIVITY: '/activity',
  // NEW_ACTIVITY: '/activities/new'
};


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.OUTFITS);
    }
  };
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      // {
      //   indexRoute: {
      //     component: Outfits,
      //     onEnter: requireAuth(getState)
      //   }
      // },

      {
        indexRoute: {
          component: Home,
          onEnter: requireUnauth(getState)
        }
      },
      {
        path: paths.SIGN_IN,
        component: SignIn,
        onEnter: requireUnauth(getState)
      },

      {
        path: paths.OUTFITS,
        component: Outfits,
          onEnter: requireAuth(getState)
      },
      {
        path: paths.OUTFIT,
        component: Outfit,
        onEnter: requireAuth(getState)
      },
      {
        path: paths.FILTER_TYPE,
        component: FilterType,
        onEnter: requireAuth(getState)
      },
      {
        path: paths.FILTER,
        component: Filter,
        onEnter: requireAuth(getState)
      },
      {
        path: paths.NEW_FILTER,
        component: NewFilter,
        onEnter: requireAuth(getState)
      }
      //
      // {
      //   path: paths.ARTICLES,
      //   component: Articles,
      //     onEnter: requireAuth(getState)
      // },
      // {
      //   path: paths.ARTICLE,
      //   component: Article,
      //     onEnter: requireAuth(getState)
      // },
      //
      //  {
      //   path: paths.WEATHERS,
      //   component: Weathers,
      //     onEnter: requireAuth(getState)
      // },
      //  {
      //   path: paths.WEATHER,
      //   component: Weather,
      //     onEnter: requireAuth(getState)
      // },
      //
      //  {
      //   path: paths.TEMPERATURES,
      //   component: Temperatures,
      //     onEnter: requireAuth(getState)
      // },
      //  {
      //   path: paths.TEMPERATURE,
      //   component: Temperature,
      //     onEnter: requireAuth(getState)
      // },
      //
      // {
      //   path: paths.ACTIVITIES,
      //   component: Activities,
      //     onEnter: requireAuth(getState)
      // },
      // {
      //   path: paths.ACTIVITY,
      //   component: Activity,
      //     onEnter: requireAuth(getState)
      // },
      // {
      //   path: paths.NEW_ACTIVITY,
      //   component: Activity,
      //     onEnter: requireAuth(getState)
      // }

    ]
  };
};
