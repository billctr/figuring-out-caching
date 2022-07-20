# Stop running container
docker stop foc

# Remove container
docker rm foc

# Remove previous builded image
docker image rm nginx-local

# Build image
docker build --build-arg SOURCE_MAP_SECRET=abcd --tag nginx-local --no-cache .

# Run container on port 3000
docker run -p 3000:80 --name foc -d nginx-local

