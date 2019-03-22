1. server.js is a simple nodejs service that returns a simple response
2. Dockerfile has the info to create a docker image
3. create-docker-image.sh will create the image using the Dockerfile and server.js and then push it to docker hub
4. create-directly.sh will create the deployment and a loadbalancer in Kubernetes environment using the docker image from docker hub, using kubectl directly without any yaml
5. delete-directly.sh will delete that deployment and loadbalancer from Kubernetes environment, using kubectl directly without any yaml
6. helloworld-deployment.yaml has the information to create a deployment and a loadbalancer in kubernete
7. create-with-yaml.sh will create the deployment and loadbalancer in Kubernetes using the hello-deployment.yaml Dockerfile
8. delete-with-yaml.sh will delete the deployment and the loadbalancer from Kubernetes using the hello-deployment.yaml
