# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json pnpm-lock.yaml ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Install pnpm and dependencies
RUN npm i -g pnpm@9
RUN pnpm install --frozen-lockfile

# Copy source code
COPY ts/ ./ts/
COPY scripts/ ./scripts/
COPY tests/ ./tests/
COPY hardhat.config.cjs ./

# Build the application
RUN pnpm run build

# Runtime stage
FROM node:20-alpine AS runner

# Install required packages
RUN apk add --no-cache curl bash wget tar

# Install pnpm
RUN npm i -g pnpm@9

# Create app user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Set working directory
WORKDIR /app

# Copy package files and install production dependencies
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy built application and source files
COPY --from=builder /app/build ./build
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/ts ./ts
COPY --from=builder /app/tsconfig*.json ./
COPY --from=builder /app/nest-cli.json ./
COPY --from=builder /app/hardhat.config.cjs ./

# Create directories for zkeys and rapidsnark
RUN mkdir -p /app/zkeys /app/rapidsnark/build /app/logs

# Download rapidsnark prover
RUN wget -qO /app/rapidsnark/build/prover https://maci-devops-zkeys.s3.ap-northeast-2.amazonaws.com/rapidsnark-linux-amd64-1c137 && \
    chmod +x /app/rapidsnark/build/prover

# Change ownership of all directories
RUN chown -R nestjs:nodejs /app

# Add startup script for waiting on init
COPY scripts/wait-for-init.sh ./scripts/wait-for-init.sh
RUN chmod +x ./scripts/wait-for-init.sh && \
    chown nestjs:nodejs ./scripts/wait-for-init.sh

USER nestjs

# Environment variables
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV COORDINATOR_RAPIDSNARK_EXE="/app/rapidsnark/build/prover"

# Expose port
EXPOSE 3001

# Start command with init wait
CMD ["./scripts/wait-for-init.sh"]