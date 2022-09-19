const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: 'PROJECT_ID',
  databaseURL: 'DATABASE_URL',
  authDomain: 'AUTH_DOMAIN',
  // OPTIONAL
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: '485669327501',
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default config;
