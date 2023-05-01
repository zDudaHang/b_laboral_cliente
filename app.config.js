export default () => ({
  expo: {
    name: 'cliente',
    slug: 'cliente',
    scheme: 'cliente',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      REACT_APP_GOOGLE_WEB_CLIENT_ID: process.env.REACT_APP_GOOGLE_WEB_CLIENT_ID,
      REACT_APP_SERVER: process.env.REACT_APP_SERVER,
    },
  },
})
