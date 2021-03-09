## Create user

In mongoDB shell (mongo -u root)

```
use admin
db.createUser( { user: "demo",pwd: "xxxxxxxxxxx",roles: [ { role: "clusterAdmin", db: "admin" },{ role: "readAnyDatabase", db: "admin" },"readWrite"] },{ w: "majority" , wtimeout: 5000 } )
```
