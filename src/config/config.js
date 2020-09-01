import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'
import parseLanguages from 'rmw-shell/lib/utils/localeTools'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading,
})

const config = {
  firebase_config: {
    apiKey: 'AIzaSyAOyx02oIcGeAb7dks8Wae5zZ56QQflmsk',
    authDomain: 'mo-money-prod.firebaseapp.com',
    databaseURL: 'https://mo-money-prod.firebaseio.com',
    projectId: 'mo-money-prod',
    storageBucket: 'mo-money-prod.appspot.com',
    messagingSenderId: '991189059825',
    appId: '1:991189059825:web:9e35d9b10151e88411c150',
  },
  firebase_config_dev: {
    apiKey: 'AIzaSyC8ococHq6JEXI4SkT4ityyrRCf-64wWSA',
    authDomain: 'mo-money-dev.firebaseapp.com',
    databaseURL: 'https://mo-money-dev.firebaseio.com',
    projectId: 'mo-money-dev',
    storageBucket: 'mo-money-dev.appspot.com',
    messagingSenderId: '684333142718',
    appId: '1:684333142718:web:94daa0ca2c5f3830dc44ef',
  },
  firebase_providers: [
    'password',
    'google.com',
    // 'facebook.com',
    // 'twitter.com',
    // 'github.com',
    
  ],
  googleMaps: {
    apiKey: 'AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g',
  },
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light',
    },
    locale: parseLanguages(['en', 'es'], 'en'),
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  analyticsProps : false, // google analytics
  landingPage: LPAsync,
}

export default config
