#!/bin/sh

# Debug: print the environment variable
echo "VITE_API_URL is: $VITE_API_URL"

# Write env.js
echo "window._env_ = { VITE_API_URL: \"$VITE_API_URL\" };" > /usr/share/nginx/html/env.js

# Debug: check that env.js is created
cat /usr/share/nginx/html/env.js

# Start NGINX
exec nginx -g "daemon off;"
