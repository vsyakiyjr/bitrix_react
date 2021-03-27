import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TabsPage = lazy(() => import("../pages/TabsPage"));

/*
export function RouterView() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={TabsPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}
*/

export const RouterView: IComponent = ({children}) => { 
  return (
	<div>
	dsfdsfdsfd
	</div>
  );
}