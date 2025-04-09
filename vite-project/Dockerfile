# Step 1: Use the official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Build the project (production build)
RUN npm run build

# Step 7: Expose the port the app will run on
EXPOSE 4173

# Step 8: Use Node.js to serve the app using the preview command
CMD ["npm", "run", "preview", "--", "--port", "4173"]
