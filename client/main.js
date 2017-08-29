import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { routes } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
    Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById("app"));
});