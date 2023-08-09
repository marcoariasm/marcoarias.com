import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
// const About = React.lazy(() => import('./pages/About'));
// const Resume = React.lazy(() => import('./pages/Resume'));
// const Work = React.lazy(() => import('./pages/Work'));
// const Contact = React.lazy(() => import('./pages/Contact'));

const routes = [
  { path: '/', element: Home },
  // { path: '/about', element: About },
  // { path: '/resume', element: Resume },
  // { path: '/work', name: 'Work', element: Work, exact: true },
  // { path: '/contact', name: 'Contact', element: Contact, exact: true },
];

export default routes;
