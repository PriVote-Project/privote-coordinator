#!/bin/bash
set -e

echo "Waiting for initialization to complete..."

# Wait for zkeys and keypairs to be ready
while [ ! -f /app/zkeys/.downloaded ] || [ ! -f /app/keypairs/.generated ]; do
    echo "Waiting for initialization... (zkeys: $([ -f /app/zkeys/.downloaded ] && echo "✓" || echo "✗"), keypairs: $([ -f /app/keypairs/.generated ] && echo "✓" || echo "✗"))"
    sleep 5
done

echo "Initialization completed. Starting application..."
exec pnpm start