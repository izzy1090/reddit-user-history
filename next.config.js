/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        REACT_APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
        REACT_APP_CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET, 
        REACT_APP_REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI, 
        REACT_APP_RANDOM_STRING: process.env.REACT_APP_RANDOM_STRING
    }
  }
  
  module.exports = nextConfig
