#!/bin/sh
# create helloworld service
kubectl delete -f ../helloworld/helloworld-without-loadbalancer.yaml
# create timeservice and greetingservice
kubectl delete -f ../simple-service2service/simple-service2service-without-loadbalancer.yaml
#create ingress and gateway with istio ingressgateway
kubectl delete -f ingress-gateway-with-istio.yaml