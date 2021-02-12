Install from helm chart

```
helm install demo-backend-mongodb . -f custom-values.yaml
```


| Parameter           | Description                                                    | Default                                                 |
|---------------------|----------------------------------------------------------------|---------------------------------------------------------|
| `mongodb.authentification.database`      | https://docs.mongodb.com/manual/core/security-users/#user-authentication-database                 | `nil`                                                   |
| `username`  | Username                      | `nil`                                                   |
| `password`     | Database password                              | `nil`                                         |
| `database`     | Database name   | `nil`                                                   |
| `port`    | Database port                                  | `nil`                                               |
| `host`  | Database host                                        | `nil`                                       |