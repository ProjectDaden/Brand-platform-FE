# Use the official Node.js image as a build stage
FROM node:22.14.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use Nginx to serve the application
FROM nginx:alpine

# Install bash
RUN apk add --no-cache bash

# Copy the built application from the previous stage
COPY --from=build /app/dist/project-daden /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80