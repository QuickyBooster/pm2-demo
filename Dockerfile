FROM keymetrics/pm2:latest-alpine

USER root

WORKDIR /demo

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

RUN ls -al -R


# Copy from pm2.io
RUN npm install pm2 -g
# key given in bucket
ENV PM2_PUBLIC_KEY lk55ao6zox85dt7
ENV PM2_SECRET_KEY ufceqth12pwsf7u
# End section

CMD ["pm2-runtime", "app.js"]

EXPOSE 3000

EXPOSE 3001

EXPOSE 3002

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]