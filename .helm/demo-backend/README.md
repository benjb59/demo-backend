Install from helm chart

```
helm install demo-backend-mongodb . -f custom-values.yaml
```


| Parameter           | Description                                                    | Default                                                 |
|---------------------|----------------------------------------------------------------|---------------------------------------------------------|
| `mongodb.authentification.database`      | https://docs.mongodb.com/manual/core/security-users/#user-authentication-database                 | `nil`                                                   |
| `mongodb.username`  | Username                      | `nil`                                                   |
| `mongodb.password`     | Database password                              | `nil`                                         |
| `mongodb.database`     | Database name   | `nil`                                                   |
| `mongodb.port`    | Database port                                  | `nil`                                               |
| `mongodb.host`  | Database host                                        | `nil`                                       |
