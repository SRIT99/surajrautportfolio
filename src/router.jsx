import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home       from './pages/Home';
import About      from './pages/About';
import Skills     from './pages/Skills';
import Projects   from './pages/Projects';
import Experience from './pages/Experience';
import Contact    from './pages/Contact';

const router = createBrowserRouter([
  { path: '/',           element: <Home /> },
  { path: '/about',      element: <About /> },
  { path: '/skills',     element: <Skills /> },
  { path: '/projects',   element: <Projects /> },
  { path: '/experience', element: <Experience /> },
  { path: '/contact',    element: <Contact /> },
]);

export default router;
