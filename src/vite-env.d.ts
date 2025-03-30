/// <reference types="vite/client" />
REACT_APP_SERVER_URL = process.env.NODE_ENV === 'production' 
  ? 'https://users-list-rosy.vercel.app/api'
  : 'http://localhost:5001/api'