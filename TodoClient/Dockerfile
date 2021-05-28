FROM node:12.19.0

RUN mkdir /TodoClient

# Set the working directory to /music_TodoClient
WORKDIR /TodoClient
COPY ./package.json .
# Copy the current directory contents into the container at /music_service
RUN npm install -g @angular/cli
RUN npm install
COPY . /TodoClient/

EXPOSE 4200
# Install any needed packages specified in requirements.txt