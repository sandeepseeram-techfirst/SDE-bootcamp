To collect and view metrics provided by Mixer, install Prometheus and Grafana addons.

Prometheus gathers metrics from the Mixer. kubectl apply -f /root/istio-1.13.3/samples/addons/prometheus.yaml

Grafana produces dashboards based on the data collected by Prometheus. kubectl apply -f istio-1.13.3/samples/addons/grafana.yaml

##### Check Status

As with Istio, these addons are deployed via Pods. 

kubectl get pods -n istio-system