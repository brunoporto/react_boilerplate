import React, { Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Index from '../../container/Index';

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            Loading.....
          </div>
        }
      >
        <Route path={path} component={Index} />        
      </Suspense>
    </Switch>
  );
};

export default Admin;
