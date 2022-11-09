## PostgreSql

- Create & Run postgresql container 

  -     docker run -p 5432:5432 --name {이름} -e POSTGRES_PASSWORD={비밀번호} -d postgres:9.4

 - Run a command 
    -     docker exec -it {컨테이너이름} /bin/bash

## Grafana
- Create grafana container 
  - docker run --name {이름} -d -p 3000:3000 grafana/grafana
