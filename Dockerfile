# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source files
COPY . .

# Build the static export (outputs to /app/out)
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine AS runner

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the static export into the nginx web root
# The basePath is /D4M, so we place files under that path
COPY --from=builder /app/out /usr/share/nginx/html/D4M

# Custom nginx configuration to handle the /D4M basePath and SPA-style routing
RUN printf 'server {\n\
    listen 80;\n\
    server_name _;\n\
\n\
    root /usr/share/nginx/html;\n\
\n\
    # Redirect bare root to the app\n\
    location = / {\n\
        return 301 /D4M/;\n\
    }\n\
\n\
    location /D4M/ {\n\
        try_files $uri $uri/ $uri.html /D4M/index.html;\n\
    }\n\
\n\
    # Cache static assets\n\
    location ~* \\.(?:ico|css|js|gif|jpe?g|png|woff2?|svg|ttf|eot)$ {\n\
        expires 1y;\n\
        add_header Cache-Control "public, immutable";\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
