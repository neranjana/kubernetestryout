kubectl create deployment helloworld-dep --image=neranjana/helloworld:v1.0
kubectl expose deployment helloworld-dep --type=LoadBalancer --port=8080