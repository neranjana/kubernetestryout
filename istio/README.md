# Deploy with Istio
1. Get Istio using 
`curl -L https://git.io/getLatestIstio/ | ISTIO_VERSION=1.0.0 sh -`
2. Add the bin directory of the downloaded Istio to $PATH
3. Enable all deployments to default kubernetes namespace by adding the template by executing 
`kubectl apply -f install/kubernetes/helm/istio/templates/crds.yaml`
4. Enable Istio authentication by executing
`kubectl apply -f install/kubernetes/istio-demo-auth.yaml`
5. Check whether the Istio pods are up by executing
`kubectl get pods -n istio-system`
6. Enable istio injection to the default kubernetes namespace by executing
`kubectl label namespace default istio-injection=enabled`
7. Deploy everything on istio enabled kubernetes by executing
`./create-on-istio.sh`
8. Get the minikube ip address using `minikube ip`. The Istio ingress gateway is configured on port `31380`
9. Test the services using the following
`curl http://<ipaddress>:31380/helloworld`
`curl http://<ipaddress>:31380/time`
`curl http://<ipaddress>:31380/greet`
10. To clean up everyting on istio, execute
`./delete-on-istio.sh`