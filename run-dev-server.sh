#!/bin/bash
set -e

if ! command -v harp >/dev/null; then
    (set -x
    npm install -g harp
    )
fi

harp server
