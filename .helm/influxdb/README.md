## Install

```
helm install my-influxdb . -f custom-values.yaml
```

## Create database k6

```
kubectl port-forward $(kubectl get pods -l app=my-influxdb -o jsonpath='{ .items[0].metadata.name }') 8086:8086
curl -XPOST 'http://localhost:8086/query' --data-urlencode 'q=CREATE DATABASE "k6"'
```

