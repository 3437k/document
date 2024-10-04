```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo systemctl status nginx

sudo systemctl enable nginx
sudo systemctl disable nginx
```

### process

```bash
sudo nginx
sudo nginx -s stop
sudo nginx -s quit
sudo nginx -s reload

sudo nginx -t

ps aux | grep nginx
ps -ef | grep nginx
```
