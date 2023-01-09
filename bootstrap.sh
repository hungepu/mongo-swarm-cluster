#!/usr/bin/env bash

docker network create --attachable -d overlay mongo

docker stack deploy -c swarm-compose.yml mongo_cluster
