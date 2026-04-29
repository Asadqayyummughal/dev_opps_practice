# Use Node base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install || true

# Run app
CMD ["node", "app.js"]
