# kusalakari.org

Static web pages generator for kusalakari.org

## Development

````
$ git clone https://github.com/ninegene/kusalakari.org.git
$ sudo npm install -g harp
$ cd kusalakari.org
$ harp server -p 9999
````
Browse to `http://localhost:9999/`

## Compile to HTML static files

```
$ cd kusalakari.org
$ harp compile . /tmp/kusalakari.org
```

## Deployment over FTP

```
Host: ftp.kusalakari.org
User: <username>@kusalakari.org
Connection: FTP over TLS
```

Use FileZilla or similar ftp tool

## License

MIT
