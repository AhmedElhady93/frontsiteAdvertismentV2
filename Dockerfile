#############
### build ###
#############

# base image
FROM node:12.2.0 as build

# install chrome for protractor tests
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >>     /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.1.0


# add app
COPY . /app



RUN ng build --prod --output-path=dist

############
### prod ###
############

# base image
FROM nginx:latest

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/nginx.conf
# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]