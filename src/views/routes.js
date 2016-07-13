import { isAuthenticated } from 'src/core/auth';
import App from './app';
import SignIn from './pages/sign-in';
import Outfits from './pages/outfits';
import Outfit from './pages/outfit';
import Articles from './pages/articles';
import Article from './pages/article';
import Weathers from './pages/weathers';
import Weather from './pages/weather';
import Temperatures from './pages/temperatures';
import Temperature from './pages/temperature';
import Activities from './pages/activities';
import Activity from './pages/activity';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  OUTFITS: '/outfits',
  OUTFIT: '/outfit',
  ARTICLES: '/articles',
  ARTICLE: '/article',
  WEATHERS: '/weathers',
  WEATHER: '/weather',
  TEMPERATURES: '/temperatures',
  TEMPERATURE: '/temperature',
  ACTIVITIES: '/activities',
  ACTIVITY: '/activity'
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
      {
        indexRoute: {
          component: Outfits,
          onEnter: requireAuth(getState)
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
        path: paths.ARTICLES,
        component: Articles,
          onEnter: requireAuth(getState)
      },
      {
        path: paths.ARTICLE,
        component: Article,
          onEnter: requireAuth(getState)
      },

       {
        path: paths.WEATHERS,
        component: Weathers,
          onEnter: requireAuth(getState)
      },
       {
        path: paths.WEATHER,
        component: Weather,
          onEnter: requireAuth(getState)
      },

       {
        path: paths.TEMPERATURES,
        component: Temperatures,
          onEnter: requireAuth(getState)
      },
       {
        path: paths.TEMPERATURE,
        component: Temperature,
          onEnter: requireAuth(getState)
      },

      {
        path: paths.ACTIVITIES,
        component: Activities,
          onEnter: requireAuth(getState)
      },
      {
        path: paths.ACTIVITY,
        component: Activity,
          onEnter: requireAuth(getState)
      }

    ]
  };
};
