#### ARGUMENTS ###
ARG NODE_VERSION=12.14
ARG NGINX_VERSION=1.17

### IMAGES ###
FROM node:${NODE_VERSION}-alpine as alpine-node
FROM nginx:${NGINX_VERSION}-alpine as alpine-nginx

#################
### DEV STAGE ###
#################
FROM alpine-node as dev
# install git and openssh for using git in container
RUN apk update && apk upgrade && apk add openssh git
# copy package.json and package-lock.json
COPY package*.json /home/app/frontend/
# copy .git for use with husky
COPY .git /home/app/frontend/
# set the current directory
WORKDIR /home/app/frontend
# install node modules
RUN npm install
# move rest of files into container
COPY . /home/app/frontend/
# expose port 8080 from container for use
EXPOSE 8080
# start container
ENTRYPOINT [ "tail", "-f" ,"/dev/null" ]

###################
### BUILD STAGE ###
###################
FROM alpine-node as build
# copy files from dev stage
COPY --from=dev / /
# set the current directory
WORKDIR /home/app/frontend
# run the build
RUN npm run build

####################
### DEPLOY STAGE ###
####################
FROM alpine-nginx as deploy
# copy files from build stage
COPY --from=build /home/app/frontend/dist /var/www/app
# remove default nginx config from container
RUN rm /etc/nginx/conf.d/default.conf
# move over custom nginx config to container
COPY nginx.conf /etc/nginx/conf.d
# expose port 80 from container for use
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]

### DEFAULT STAGE ###
FROM deploy
