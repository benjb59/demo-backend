Install from helm chart

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/mongodb
```

In mongoDB shell

```
db.createUser( { user: "demo",pwd: "xxxxxxxxxx",roles: [ { role: "clusterAdmin", db: "admin" },{ role: "readAnyDatabase", db: "admin" },"readWrite"] },{ w: "majority" , wtimeout: 5000 } )
```
