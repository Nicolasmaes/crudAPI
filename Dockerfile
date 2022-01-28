FROM node
COPY . /myproject
WORKDIR /myproject
CMD node index.js
