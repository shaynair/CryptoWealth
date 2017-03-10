#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER crypto WITH PASSWORD 'password' CREATEDB;
    CREATE DATABASE crypto_dev;
    GRANT ALL PRIVILEGES ON DATABASE crypto_dev TO crypto;
EOSQL
