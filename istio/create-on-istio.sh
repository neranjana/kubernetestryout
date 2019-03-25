#!/bin/sh
# create helloworld service
kubectl apply -f ../helloworld/helloworld-without-loadbalancer.yaml
# create timeservice and greetingservice
kubectl apply -f ../simple-service2service/simple-service2service-without-loadbalancer.yaml
#create ingress and gateway with istio ingressgateway
kubectl apply -f ingress-gateway-with-istio.yaml