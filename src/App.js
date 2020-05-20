import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from './providers/firebase-provider';
import { i18nProvider } from './providers/i18n-provider';
import { authProvider } from './providers/auth-provider';

import Login from './resources/Login';
import Barber from './resources/Barber';
import Request from './resources/Request'

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource name='users' list={ListGuesser} />
    <Resource name='barbers' {...Barber} />
    <Resource name='appointments' {...Request} />
    <Resource name='barbers_addresses' />
  </Admin>
);

export default App;
