Install from helm chart (https://github.com/bitnami/charts/tree/master/bitnami/mongodb)

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/mongodb
```

In mongoDB shell

```
use admin
db.createUser( { user: "demo",pwd: "ajfopNNKDMPJNXV",roles: [ { role: "clusterAdmin", db: "admin" },{ role: "readAnyDatabase", db: "admin" },"readWrite"] },{ w: "majority" , wtimeout: 5000 } )
```
