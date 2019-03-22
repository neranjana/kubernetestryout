#!/bin/sh
docker build -t neranjana/timeservice:2.1 ./timeservice
docker push neranjana/timeservice:2.1
docker build -t neranjana/greetingservice:2.1 ./greetingservice
docker push neranjana/greetingservice:2.1