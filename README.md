# Before run this application

### Copy-paste the .env file

```bash
$ cp .env.example .env
```

Edit the BASE_URL to your server 

### Install packages

```bash
$ yarn
```

### Run

```bash
$ yarn dev
```

Server run on port 3000

### build

```bash
$ yarn build
```

### Run Production

```bash
$ yarn start
```

### If you want to run with Docker

```bash
$ docker build -t wp-frontend:latest .
$ docker run -p 3000:3000 wp-frontend:latest
```