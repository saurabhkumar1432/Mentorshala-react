# Use the official Node.js image as the base image
FROM node:14-alpine

# Set up the working directory inside the container
WORKDIR /app

# Copy the files from the local machine into the container
COPY . /app

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]