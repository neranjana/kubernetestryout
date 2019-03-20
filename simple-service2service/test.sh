#!/bin/sh
x=10
protocol='http://'
port=':30902'
host=$(minikube ip)
url=$protocol$host$port
while [ $x -gt 0 ]
do
    sleep 1s
    curl $url
    printf "\n"
    x=$(( $x - 1 ))
done