FROM node:4.2.2

RUN mkdir /opt/weather

WORKDIR /opt/weather
ADD . /opt/weather

RUN npm install -g bower
RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN bower install

RUN npm install
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 8080

CMD npm start