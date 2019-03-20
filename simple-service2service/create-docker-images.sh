#!/bin/sh
docker build -t neranjana/timeservice:2.0 ./timeservice
docker push neranjana/timeservice:2.0
docker build -t neranjana/greetingservice:2.0 ./greetingservice
docker push neranjana/greetingservice:2.0