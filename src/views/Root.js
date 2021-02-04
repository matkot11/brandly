import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes/index';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import Login from 'views/Login';
import Register from 'views/Register';
import Item from 'views/Item';
import Cart from 'views/Cart';
import Address from 'views/Address';
import Payment from 'views/Payment';
import Confirm from 'views/Confirm';
import Done from 'views/Done';

const Root = () => (
  <HashRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.main} component={MainPage} />
        <Route exact path={routes.category} component={MainPage} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.itemDetails} component={Item} />
        <Route exact path={routes.cart} component={Cart} />
        <Route path={routes.address} component={Address} />
        <Route path={routes.payment} component={Payment} />
        <Route path={routes.confirm} component={Confirm} />
        <Route path={routes.done} component={Done} />
      </Switch>
    </MainTemplate>
  </HashRouter>
);

export default Root;
