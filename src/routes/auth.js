import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from '../container/Index';

const NotFound = () => {
  return <Redirect to="/" />;
};

const FrontendRoutes = () => {
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            Loading....
          </div>
        }
      >       
        <Route exact path="/" component={Index} />
        <Route exact path="*" component={NotFound} />
      </Suspense>
    </Switch>
  );
};

export default FrontendRoutes;
