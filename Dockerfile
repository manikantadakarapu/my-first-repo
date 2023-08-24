# Use an official NGINX image as the base
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the static files from the build context to the container
COPY index.html .
COPY style.css .
COPY script.js .

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start NGINX when the container is run
CMD ["nginx", "-g", "daemon off;"]
