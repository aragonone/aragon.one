import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import app from './app.css'
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

export default () => (
  <Router>
    <Routes />
  </Router>
)
