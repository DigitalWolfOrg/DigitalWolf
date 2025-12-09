# Step 1: Build stage
FROM node:20-alpine AS builder

# Working directory 
WORKDIR /app

# Package.json and lock file 
COPY package.json package-lock.json ./

# Dependencies install 
RUN npm ci

# Baaki code copy karo
COPY . .

# Build
RUN npm run build

# Step 2: Production stage
FROM nginx:alpine

# Build output copying in nginx  html folder 
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx default port expose
EXPOSE 80

# Nginx run 
CMD ["nginx", "-g", "daemon off;"]
