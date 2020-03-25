import fs from 'fs-extra'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

const REACT_STATIC_PATHS = {
  src: 'src',
  dist: 'dist',
  devDist: 'dist',
  public: 'public',
}

const ARAGON_UI_ASSETS = path.dirname(require.resolve('@aragon/ui'))

export default {
  siteRoot: process.env.SITE_ROOT || '',
  getSiteData: () => ({
    title: 'Aragon One',
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/pages/Home',
      getData: () => ({ title: '' }),
    },
    {
      path: '/jobs',
      component: 'src/pages/Jobs',
      getData: () => ({ title: '' }),
    },
  ],
  paths: REACT_STATIC_PATHS,
  webpack: (conf, { defaultLoaders }) => {
    conf.resolve = Object.assign({}, conf.resolve || {}, {
      // Needed when @aragon/ui is linked (development)
      modules: ((conf.resolve && conf.resolve.modules) || []).concat([
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, REACT_STATIC_PATHS.dist),
      ]),
    })

    // Copy the Aragon UI assets to dist/aragon-ui. CopyWebpackPlugin is aware
    // of webpack-dev-server so there is no need to add this directory to the
    // devServer configuration.
    conf.plugins = (conf.plugins || []).concat([
      new CopyWebpackPlugin([
        {
          from: ARAGON_UI_ASSETS,
          to: path.resolve(
            path.join(__dirname, REACT_STATIC_PATHS.dist, 'aragon-ui')
          ),
        },
      ]),
    ])

    const fileLoader = defaultLoaders.fileLoader
    fileLoader.query.name = 'static/[hash:8]-[name].[ext]'
    conf.module.rules = [
      {
        oneOf: [defaultLoaders.jsLoader, defaultLoaders.cssLoader, fileLoader],
      },
    ]
    conf.plugins.push(new ExtractTextPlugin('app.css'))

    return conf
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends React.Component {
    analyticsCode() {
      if (process.env.NODE_ENV !== 'production') return ''
      return `
        var Countly = Countly || {};
        Countly.q = Countly.q || [];

        //provide countly initialization parameters
        Countly.app_key = '00e285914b3ca2424a78bd6b7987362465022466';
        Countly.url = 'https://try.count.ly';
        Countly.inactivity_time = 10;

        Countly.q.push(['track_sessions']);
        Countly.q.push(['track_pageview']);
        Countly.q.push(['track_clicks']);
        Countly.q.push(['track_errors']);

        (function() {
          var cly = document.createElement('script'); cly.type = 'text/javascript';
          cly.async = true;
          cly.src = 'https://try.count.ly/sdk/web/countly.min.js';
          cly.onload = function(){Countly.init()};
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
        })();
      `
    }
    render() {
      const {
        Html,
        Head,
        Body,
        siteData: { title: siteTitle },
        children,
        renderMeta,
        routeInfo: { allProps: { title } = {} } = {},
      } = this.props
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <title>{title || siteTitle}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.png" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
              integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
              crossOrigin="anonymous"
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@AragonOneTeam" />
            <meta name="twitter:creator" content="@AragonOneTeam" />
            <meta name="twitter:description" content="We believe and fight for freedom" />
            <meta name="twitter:title" content="Aragon One" />
            <meta name="twitter:image" content="https://raw.githubusercontent.com/aragonone/website/master/public/twitter-card-icon.png" />

            <meta property="og:title" content="Aragon One" />
            <meta property="og:description" content="We believe and fight for freedom" />
            <meta property="og:url" content="https://aragon.one/" />
            <meta property="og:site_name" content="Aragon One" />
            <meta property="og:image" content="https://raw.githubusercontent.com/aragonone/website/master/public/twitter-card-icon.png" />
            <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/aragonone/website/master/public/twitter-card-icon.png" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />

            <meta name="description" content="We believe and fight for freedom" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
            <script
              dangerouslySetInnerHTML={{ __html: this.analyticsCode() }}
            />
          </Body>
        </Html>
      )
    }
  },
}
