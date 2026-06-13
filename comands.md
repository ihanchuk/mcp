### Add package to MicroService

```bash
npm i <package> -w @services/user-service
```

### Add shared package

```bash
npm install @shared/schemas -w @apps/mcp-server
```

### Remove shared package

```bash
npm uninstall @shared/libs -w @apps/mcp-server
```

### Check deps graph:

```bash
npm ls -w @apps/mcp-server
```

### Connect to local NATS-Box

```bash
docker exec -it nats-box sh
```

### Publish local message

```bash
nats pub users.all '{"ok": true}'
```
