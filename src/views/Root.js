import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/index';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import Login from 'views/Login';
import Register from 'views/Register';
import Item from 'views/Item';
import Cart from 'views/Cart';
import Address from 'views/Address';
import Payment from 'views/Payment';
import Done from 'views/Done';
import getUser from 'composables/getUser';

const Root = () => {
  const { user } = getUser();
  return (
    <HashRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.main} component={MainPage} />
          <Route exact path={routes.category} component={MainPage} />
          <Route
            path={routes.login}
            render={() => (!user ? <Login /> : <Redirect to={routes.main} />)}
          />
          <Route
            path={routes.register}
            render={() =>
              !user ? <Register /> : <Redirect to={routes.main} />
            }
          />
          <Route path={routes.itemDetails} component={Item} />
          <Route
            exact
            path={routes.cart}
            render={() => (user ? <Cart /> : <Redirect to={routes.main} />)}
          />
          <Route
            path={routes.address}
            render={() => (user ? <Address /> : <Redirect to={routes.main} />)}
          />
          <Route
            path={routes.payment}
            render={() => (user ? <Payment /> : <Redirect to={routes.main} />)}
          />
          <Route
            path={routes.done}
            render={() => (user ? <Done /> : <Redirect to={routes.main} />)}
          />
        </Switch>
      </MainTemplate>
    </HashRouter>
  );
};
export default Root;
