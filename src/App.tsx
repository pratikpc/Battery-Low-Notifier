import React from 'react';
import clsx from 'clsx';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Menu from './components/menu';
import Auth, { LogOut } from './auth';

import Dashboard from './components/Dashboard';

const App: React.FC = () => {
   const classes = useStyles();

   return (
      <Router>
         <Auth>
            <div className={clsx('App', classes.root)}>
               <Menu />
               <main className={classes.content}>
                  <Container maxWidth="lg" className={classes.container}>
                     <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route
                           path="/signOut"
                           component={() => {
                              LogOut()
                                 .then(() => {
                                    window.location.href = `${process.env.PUBLIC_URL}/`;
                                    return null;
                                 })
                                 .catch(err => console.error(err));
                              return null;
                           }}
                        />
                     </Switch>
                  </Container>
               </main>
            </div>
         </Auth>
         <Switch>
            <Route
               path="/article"
               component={() => {
                  window.location.href =
                     'https://medium.com/@pratikpc/six-degrees-of-formula-one-and-other-inter-connections-160a3a668afa?source=friends_link&sk=474f667c0b1ea7e18e8531c23b48eb8b';
                  return null;
               }}
            />
            <Route
               path="/code-website"
               component={() => {
                  window.location.href =
                     'https://github.com/pratikpc/Battery-Low-Notifier';
                  return null;
               }}
            />
            <Route
               path="/code-app"
               component={() => {
                  window.location.href =
                     'https://github.com/pratikpc/Battery-Low-Notifier-Android';
                  return null;
               }}
            />
            <Route
               path="/release"
               component={() => {
                  window.location.href =
                     'https://github.com/pratikpc/Battery-Low-Notifier-Android/releases';
                  return null;
               }}
            />
         </Switch>
      </Router>
   );
};

const useStyles = makeStyles(theme => ({
   root: {
      display: 'flex'
   },
   content: {
      flexGrow: 1,
      height: '90vh',
      overflow: 'auto',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
   },
   container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
   }
}));

export default App;
