# MCP + Nats

## Installation

```bash
npm i
```

## Local development

#### Runing MCP server

```bash
npm run server:build:watch
```

and after that

```bash
npm run server:inspect
```

#### Runing NATS server

```bash
docker-compose up
```

## Managing Nats

#### Loging in NATS

#### Conecting to NATS Server

```bash
docker exec -it nats-box sh
```

# NATS & JetStream CLI Cheat Sheet

| Command                                  | Description                                    |
| ---------------------------------------- | ---------------------------------------------- |
| `nats stream ls`                         | List all JetStream streams                     |
| `nats stream info <STREAM>`              | Show detailed information about a stream       |
| `nats stream view <STREAM>`              | View messages stored in a stream               |
| `nats stream get <STREAM> <SEQ>`         | Retrieve a specific message by sequence number |
| `nats stream purge <STREAM>`             | Remove all messages from a stream              |
| `nats stream rm <STREAM>`                | Delete a stream completely                     |
| `nats stream add <STREAM>`               | Create a new stream interactively              |
| `nats consumer ls <STREAM>`              | List consumers attached to a stream            |
| `nats consumer info <STREAM> <CONSUMER>` | Show detailed consumer information             |
| `nats consumer rm <STREAM> <CONSUMER>`   | Delete a consumer                              |
| `nats pub <SUBJECT> <PAYLOAD>`           | Publish a message to a subject                 |
| `nats sub <SUBJECT>`                     | Subscribe to a subject and receive messages    |
| `nats sub "users.>"`                     | Subscribe using a wildcard subject             |
| `nats request <SUBJECT> <PAYLOAD>`       | Send a request and wait for a reply            |
| `nats reply <SUBJECT>`                   | Start a simple reply handler                   |
| `nats context ls`                        | List configured NATS contexts                  |
| `nats context select <NAME>`             | Switch active context                          |
| `nats account info`                      | Display account information                    |
| `nats server list`                       | List known NATS servers                        |
| `nats server report connections`         | Show active client connections                 |
| `nats server report jetstream`           | Show JetStream usage and statistics            |
| `nats server report routes`              | Show cluster routes                            |
| `nats server report gateways`            | Show gateway connections                       |
| `nats server report leafnodes`           | Show leaf node connections                     |

---

# Useful Examples

### Publish an event

```bash
nats pub users.created '{"id":"123","name":"John"}'
```

### Listen for all user events

```bash
nats sub "users.>"
```

### Request/Reply

```bash
nats request users.get '{"id":"123"}'
```

### Create a stream

```bash
nats stream add USERS \
  --subjects "users.*" \
  --storage file
```

### Inspect a stream

```bash
nats stream info USERS
```

### Inspect a consumer

```bash
nats consumer info USERS EMAIL_WORKER
```

### View stored messages

```bash
nats stream view USERS
```

### Purge a stream

```bash
nats stream purge USERS
```

### Show JetStream health

```bash
nats server report jetstream
```

---

# Subject Wildcards

| Pattern   | Meaning                                                                          |
| --------- | -------------------------------------------------------------------------------- |
| `users.*` | Match exactly one token (`users.created`, `users.deleted`)                       |
| `users.>` | Match all nested subjects (`users.created.email`, `users.updated.profile`, etc.) |
| `>`       | Match every subject                                                              |
| `*.*`     | Match any subject with exactly two tokens                                        |

Examples:

```text
users.created
users.updated
users.deleted
```

matches:

```text
users.*
```

while:

```text
users.created.email
users.created.sms
users.updated.profile
```

matches:

```text
users.>
```
