FROM node:6.14.2
EXPOSE 8902
COPY greetingservice.js .
CMD TIME_SERVICE_PORT=8901 TIME_SERVICE_HOST=timeservice THIS_SERVICE_PORT=8902 node greetingservice.js