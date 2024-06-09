### Istio - Cloud Native Basics ### 

Istio is an open platform that provides a uniform way to connect, manage, and secure microservices. 

Istio supports managing traffic flows between microservices, enforcing access policies, and aggregating telemetry data, all without requiring changes to the microservice code.

kubectl cluster-info 
kubectl get nodes -o wide

Install Istio:

export ISTIO_VERSION=1.13.3 
curl -L https://istio.io/downloadIstio | TARGET_ARCH=x86_64 sh -
echo "export PATH=/root/istio-${ISTIO_VERSION}/bin:\$PATH" >> .plainrc
export PATH=/root/istio-${ISTIO_VERSION}/bin:$PATH

mv /tmp/istio-course.yaml /root/istio-${ISTIO_VERSION}/manifests/profiles/
istioctl install --set profile=istio-course -y --manifests=/root/istio-${ISTIO_VERSION}/manifests


Deploy Pilot, Mixer, Ingress-Controller, and Egress-Controller, and the Istio CA (Certificate Authority).


controlplane $ kubectl get pods,services -n istio-system
NAME                                        READY   STATUS    RESTARTS   AGE
pod/istio-egressgateway-6f594c7ff-r6fxs     1/1     Running   0          54s
pod/istio-ingressgateway-74df4d6767-2kwlm   1/1     Running   0          54s
pod/istiod-7bdb6b4fb8-fwtrj                 1/1     Running   0          55s

NAME                           TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                                                                      AGE
service/istio-egressgateway    ClusterIP      10.104.241.51   <none>        80/TCP,443/TCP                                                               54s
service/istio-ingressgateway   LoadBalancer   10.100.74.19    <pending>     15021:30103/TCP,80:30849/TCP,443:31150/TCP,31400:31501/TCP,15443:30332/TCP   54s
service/istiod                 ClusterIP      10.103.166.44   <none>        15010/TCP,15012/TCP,443/TCP,15014/TCP                                        55s
controlplane $ 