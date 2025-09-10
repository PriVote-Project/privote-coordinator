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

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/scripts ./scripts

# Create directories for zkeys and rapidsnark
RUN mkdir -p /app/zkeys /app/rapidsnark/build

# Download rapidsnark prover
RUN wget -qO /app/rapidsnark/build/prover https://maci-devops-zkeys.s3.ap-northeast-2.amazonaws.com/rapidsnark-linux-amd64-1c137 && \
    chmod +x /app/rapidsnark/build/prover

# Change ownership
RUN chown -R nestjs:nodejs /app

USER nestjs

# Environment variables
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV COORDINATOR_RAPIDSNARK_EXE="/app/rapidsnark/build/prover"

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3001/health || exit 1

# Start command
CMD ["pnpm", "start:prod"]

