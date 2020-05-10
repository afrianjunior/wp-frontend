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

### Build and run production

```bash
$ yarn build && yarn start
```

### Run test

```bash
$ yarn test
```

### If you want to run with Docker

```bash
$ docker build -t wp-frontend:latest .
$ docker run -p 3000:3000 wp-frontend:latest
```