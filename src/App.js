import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from './Loader/Loader';
import Navigation from './views/Navigation';
const CurrencyPage = lazy(() => import('./views/CurrencyPage'));
const HomeView = lazy(() => import('./views/Homepage'));
const CurrencyRow = lazy(() => import('./views/CurrencyRow'));
const Transaction = lazy(() => import('./views/TransactionHistory'));
const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/options" exact>
            <CurrencyPage />
          </Route>
          <Route path="/options/:id" exact>
            <CurrencyRow />
          </Route>
          <Route path="/transactions">
            <Transaction />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
