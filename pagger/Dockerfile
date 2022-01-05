FROM node:14

WORKDIR /tmp
RUN apt-get update && apt-get -y upgrade && apt-get install -y alien libaio1

# apt-get and system utilities
RUN apt-get install -y curl apt-utils apt-transport-https debconf-utils gcc build-essential g++ 

# install additional utilities
RUN apt-get install gettext nano mc -y && rm -rf /var/lib/apt/lists/*

ADD ./src/package.json /app/

WORKDIR /app
RUN npm install --force

COPY ./src .

RUN npm install config

CMD ["npm", "run", "start"]
