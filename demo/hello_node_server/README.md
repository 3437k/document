# Express node server

Print hello world 

### Install & Run

```bash
git clone https://github.com/3437k/document.git
cd demo\hello_node_server

npm install

node server.js
```

### Web

```bash
http://localhost:9090
```

## Check

Folder permission

```bash
sudo chmod -R 755 /path/hello_node_server
```

Nignx

```bash
# static routing
location / {
    proxy_pass http://localhost:9090;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}

location /hello {
    proxy_pass http://localhost:9090/api/hello;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}

# option: dynamic routing
location / {
    rewrite ^/hello$ /api/hello break;
    proxy_pass http://localhost:9090;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

some commands

```
cd /etc/nginx/sites-available
nginx -t
nginx -s reload
```

diff

- domain.com/hello 

- domain.com/hello/