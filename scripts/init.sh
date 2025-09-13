#!/bin/bash
set -e

echo "Starting combined initialization..."

# Check and download zkeys
if [ ! -f /app/zkeys/.downloaded ]; then
    echo "Downloading zkeys (3.5GB)..."
    curl -L https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v3.0.0/maci_artifacts_v3.0.0_test.tar.gz -o /tmp/maci_keys.tar.gz
    tar -xzf /tmp/maci_keys.tar.gz -C /app/zkeys
    rm /tmp/maci_keys.tar.gz
    touch /app/zkeys/.downloaded
    echo "Zkeys downloaded successfully"
else
    echo "Zkeys already downloaded, skipping..."
fi

# Check and generate keypairs
if [ ! -f /app/keypairs/.generated ]; then
    echo "Generating coordinator keypair..."
    pnpm run generate-keypair
    
    # Copy generated files
    cp -r /app/proofs /app/keypairs/ 2>/dev/null || true
    cp /app/coordinator_* /app/keypairs/ 2>/dev/null || true
    
    touch /app/keypairs/.generated
    echo "Keypair generated successfully"
else
    echo "Keypair already generated, skipping..."
fi

echo "Initialization completed successfully"