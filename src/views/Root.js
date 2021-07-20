import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/index';
import MainTemplate from 'templates/Main/Main-template';
import MainPage from 'views/MainPage/MainPage-view';
import Login from 'views/Login/Login-view';
import Register from 'views/Register/Register-view';
import Item from 'views/Item/Item-view';
import Cart from 'views/Cart/Cart-view';
import Address from 'views/Address/Address-view';
import Payment from 'views/Payment/Payment-view';
import Done from 'views/Done/Done-view';
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
