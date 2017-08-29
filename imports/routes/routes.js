import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

// import createHistory from 'history/createBrowserHistory';
// const history = createHistory({
//   forceRefresh: false
// });

// const unauthenticatedPages = ['/', '/signup'];
// const authenticatedPages = ['/links'];

// export const onAuthChange = (isAuthenticated) => {
//     const pathname = history.location.pathname;
//     const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
//     const isAuthenticatedPage = authenticatedPages.includes(pathname);
    
//     //console.log("isAuthenticated", isAuthenticated);
//     //console.log(history);
    
//     if (isUnauthenticatedPage && isAuthenticated) {
//       history.replace("/links");
//       history.go();
//     } else if (isAuthenticatedPage && !isAuthenticated) {
//       history.replace("/");
//       history.go();
//   }
// };

export const routes = (
  <Router>
    <Switch>
      <Route exact path="/" render={() => (
        Meteor.userId() ? (
          <Redirect to="/links"/>
        ) : (
          <Login/>
        )
      )}/>
      <Route path="/signup" render={() => (
        Meteor.userId() ? (
          <Redirect to="/links"/>
        ) : (
          <Signup/>
        )
      )}/>
      <Route path="/links" render={() => (
        Meteor.userId() ? (
          <Link/>
        ) : (
          <Redirect to="/"/>
        )
      )}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);