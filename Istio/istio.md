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