# Use an official Node.js runtime as the base image
FROM node:14.15.1-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
