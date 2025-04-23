# Step 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the app (at this stage, VITE_API_URL is not needed)
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine

# Copy built files to NGINX HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Optional: Add custom NGINX config for SPA routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default NGINX port
EXPOSE 80

# Set the custom entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

# Default command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
