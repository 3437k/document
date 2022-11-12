## PostgreSql

- Create & Run postgresql container 

  -     docker run -p 5432:5432 --name {NAME} -e POSTGRES_PASSWORD={PASSWORD} -d postgres:9.4

 - Run a command 
    -     docker exec -it {NAME} /bin/bash

## Grafana
- Create grafana container 
  - docker run --name {NAME} -d -p 3000:3000 grafana/grafana
