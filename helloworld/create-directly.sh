#!/bin/sh
kubectl create deployment helloworld-dep --image=neranjana/helloworld:1.0
kubectl expose deployment helloworld-dep --type=LoadBalancer --port=8080