# 🚀 Guia de Deploy - Sistema Lunysse

## Visão Geral

Este documento descreve os processos de build, deploy e configuração do Sistema Lunysse para diferentes ambientes.

## Ambientes

### Desenvolvimento
- **URL**: http://localhost:5173
- **Build**: Vite dev server
- **Dados**: localStorage (mock)
- **Hot Reload**: Ativo

### Staging
- **URL**: https://staging.lunysse.com
- **Build**: Vite build (development mode)
- **Dados**: API de teste
- **Propósito**: Testes e validação

### Produção
- **URL**: https://lunysse.com
- **Build**: Vite build (production mode)
- **Dados**: API de produção
- **Propósito**: Usuários finais

## Pré-requisitos

### Sistema
- Node.js 18+ 
- npm 9+ ou yarn 1.22+
- Git 2.30+

### Serviços (Produção)
- Servidor web (Nginx/Apache)
- CDN (CloudFlare/AWS CloudFront)
- Monitoramento (Sentry)
- Analytics (Google Analytics)

## Build Local

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar aplicação
# http://localhost:5173
```

### Build de Produção
```bash
# Build para produção
npm run build

# Preview da build
npm run preview

# Verificar build
ls -la dist/
```

### Análise do Bundle
```bash
# Instalar analisador
npm install -g vite-bundle-analyzer

# Analisar bundle
npx vite-bundle-analyzer dist/
```

## Configuração de Ambiente

### Variáveis de Ambiente

Criar arquivo `.env` na raiz do projeto:

```bash
# .env.development
VITE_APP_ENV=development
VITE_API_URL=http://localhost:3000/api/v1
VITE_APP_NAME=Lunysse Dev
VITE_ENABLE_MOCK=true
VITE_DEBUG=true
```

```bash
# .env.staging
VITE_APP_ENV=staging
VITE_API_URL=https://api-staging.lunysse.com/v1
VITE_APP_NAME=Lunysse Staging
VITE_ENABLE_MOCK=false
VITE_DEBUG=true
VITE_SENTRY_DSN=https://your-sentry-dsn
```

```bash
# .env.production
VITE_APP_ENV=production
VITE_API_URL=https://api.lunysse.com/v1
VITE_APP_NAME=Lunysse
VITE_ENABLE_MOCK=false
VITE_DEBUG=false
VITE_SENTRY_DSN=https://your-sentry-dsn
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID
```

### Configuração do Vite

```javascript
// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    
    // Configurações de build
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      minify: mode === 'production' ? 'esbuild' : false,
      
      // Otimização de chunks
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['framer-motion', 'lucide-react'],
            charts: ['recharts']
          }
        }
      },
      
      // Configurações de assets
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      
      // Otimização CSS
      cssCodeSplit: true,
      cssMinify: mode === 'production'
    },
    
    // Configurações do servidor de desenvolvimento
    server: {
      port: 5173,
      host: true,
      open: true
    },
    
    // Preview server
    preview: {
      port: 4173,
      host: true
    },
    
    // Alias de paths
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@services': resolve(__dirname, 'src/services'),
        '@context': resolve(__dirname, 'src/context')
      }
    },
    
    // Definir variáveis globais
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
      __API_URL__: JSON.stringify(env.VITE_API_URL)
    }
  };
});
```

## Deploy Manual

### 1. Build da Aplicação
```bash
# Limpar build anterior
rm -rf dist/

# Build para produção
npm run build

# Verificar arquivos gerados
ls -la dist/
```

### 2. Upload para Servidor

#### Via SCP
```bash
# Fazer backup do deploy anterior
ssh user@server "mv /var/www/lunysse /var/www/lunysse.backup.$(date +%Y%m%d_%H%M%S)"

# Upload dos arquivos
scp -r dist/* user@server:/var/www/lunysse/
```

#### Via FTP
```bash
# Usando lftp
lftp -u username,password ftp.server.com
cd public_html
mirror -R dist/ ./
quit
```

### 3. Configuração do Servidor Web

#### Nginx
```nginx
# /etc/nginx/sites-available/lunysse
server {
    listen 80;
    listen [::]:80;
    server_name lunysse.com www.lunysse.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name lunysse.com www.lunysse.com;
    
    # SSL Configuration
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    
    # Document root
    root /var/www/lunysse;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # API proxy (se necessário)
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Apache
```apache
# /etc/apache2/sites-available/lunysse.conf
<VirtualHost *:80>
    ServerName lunysse.com
    ServerAlias www.lunysse.com
    Redirect permanent / https://lunysse.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName lunysse.com
    ServerAlias www.lunysse.com
    DocumentRoot /var/www/lunysse
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    
    # Compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>
    
    # Cache static files
    <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </LocationMatch>
    
    # Handle client-side routing
    <Directory /var/www/lunysse>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

## Deploy Automatizado

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test
    
    - name: Run linting
      run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
      env:
        VITE_APP_ENV: production
        VITE_API_URL: ${{ secrets.API_URL }}
        VITE_SENTRY_DSN: ${{ secrets.SENTRY_DSN }}
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: dist
        path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Download build artifacts
      uses: actions/download-artifact@v3
      with:
        name: dist
        path: dist/
    
    - name: Deploy to server
      uses: appleboy/scp-action@v0.1.4
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        source: "dist/*"
        target: "/var/www/lunysse"
        strip_components: 1
    
    - name: Restart web server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          sudo systemctl reload nginx
          sudo systemctl status nginx
```

### GitLab CI/CD

```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

variables:
  NODE_VERSION: "18"

cache:
  paths:
    - node_modules/

test:
  stage: test
  image: node:$NODE_VERSION
  script:
    - npm ci
    - npm run test
    - npm run lint
  coverage: '/Lines\s*:\s*(\d+\.\d+)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

build:
  stage: build
  image: node:$NODE_VERSION
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour
  only:
    - main
    - develop

deploy_staging:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache rsync openssh
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - rsync -avz --delete dist/ $STAGING_USER@$STAGING_HOST:/var/www/lunysse-staging/
  environment:
    name: staging
    url: https://staging.lunysse.com
  only:
    - develop

deploy_production:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache rsync openssh
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - rsync -avz --delete dist/ $PROD_USER@$PROD_HOST:/var/www/lunysse/
  environment:
    name: production
    url: https://lunysse.com
  when: manual
  only:
    - main
```

## Deploy com Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built application
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  lunysse-frontend:
    build: .
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    
  lunysse-api:
    image: lunysse/api:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
    restart: unless-stopped
    depends_on:
      - postgres
      
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=lunysse
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

### Deploy com Docker

```bash
# Build da imagem
docker build -t lunysse/frontend:latest .

# Run local
docker run -p 80:80 lunysse/frontend:latest

# Deploy com compose
docker-compose up -d

# Verificar status
docker-compose ps
docker-compose logs -f lunysse-frontend
```

## Deploy em Plataformas Cloud

### Vercel

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "VITE_API_URL": "@api-url",
    "VITE_SENTRY_DSN": "@sentry-dsn"
  }
}
```

```bash
# Deploy para Vercel
npm install -g vercel
vercel --prod
```

### Netlify

```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### AWS S3 + CloudFront

```bash
# Build da aplicação
npm run build

# Upload para S3
aws s3 sync dist/ s3://lunysse-frontend --delete

# Invalidar cache do CloudFront
aws cloudfront create-invalidation --distribution-id E1234567890 --paths "/*"
```

## Monitoramento e Logs

### Configuração do Sentry

```javascript
// src/utils/sentry.js
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
    environment: import.meta.env.VITE_APP_ENV,
  });
}
```

### Google Analytics

```javascript
// src/utils/analytics.js
import { gtag } from 'ga-gtag';

if (import.meta.env.VITE_GA_TRACKING_ID) {
  gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

export const trackEvent = (action, category, label, value) => {
  if (import.meta.env.VITE_GA_TRACKING_ID) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

## Rollback e Recuperação

### Estratégia de Rollback

```bash
# Script de rollback
#!/bin/bash
BACKUP_DIR="/var/www/backups"
CURRENT_DIR="/var/www/lunysse"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Fazer backup da versão atual
echo "Fazendo backup da versão atual..."
cp -r $CURRENT_DIR $BACKUP_DIR/lunysse_$TIMESTAMP

# Listar backups disponíveis
echo "Backups disponíveis:"
ls -la $BACKUP_DIR/

# Solicitar versão para rollback
read -p "Digite o nome do backup para rollback: " BACKUP_NAME

# Executar rollback
if [ -d "$BACKUP_DIR/$BACKUP_NAME" ]; then
    echo "Executando rollback para $BACKUP_NAME..."
    rm -rf $CURRENT_DIR
    cp -r $BACKUP_DIR/$BACKUP_NAME $CURRENT_DIR
    sudo systemctl reload nginx
    echo "Rollback concluído!"
else
    echo "Backup não encontrado!"
fi
```

### Blue-Green Deployment

```bash
# Script blue-green deployment
#!/bin/bash
BLUE_DIR="/var/www/lunysse-blue"
GREEN_DIR="/var/www/lunysse-green"
CURRENT_LINK="/var/www/lunysse"

# Determinar ambiente ativo
if [ -L $CURRENT_LINK ]; then
    CURRENT_TARGET=$(readlink $CURRENT_LINK)
    if [ "$CURRENT_TARGET" = "$BLUE_DIR" ]; then
        DEPLOY_TARGET=$GREEN_DIR
        DEPLOY_COLOR="green"
    else
        DEPLOY_TARGET=$BLUE_DIR
        DEPLOY_COLOR="blue"
    fi
else
    DEPLOY_TARGET=$BLUE_DIR
    DEPLOY_COLOR="blue"
fi

echo "Deploying to $DEPLOY_COLOR environment..."

# Deploy para ambiente inativo
rsync -avz --delete dist/ $DEPLOY_TARGET/

# Teste de saúde
curl -f http://localhost/health || exit 1

# Switch do symlink
ln -sfn $DEPLOY_TARGET $CURRENT_LINK

# Reload do servidor web
sudo systemctl reload nginx

echo "Deployment to $DEPLOY_COLOR completed!"
```

## Checklist de Deploy

### Pré-Deploy
- [ ] Testes passando
- [ ] Build sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] Backup da versão atual
- [ ] Notificação da equipe

### Deploy
- [ ] Upload dos arquivos
- [ ] Configuração do servidor web
- [ ] Teste de conectividade
- [ ] Verificação de logs
- [ ] Teste de funcionalidades críticas

### Pós-Deploy
- [ ] Monitoramento ativo
- [ ] Verificação de métricas
- [ ] Teste de performance
- [ ] Documentação atualizada
- [ ] Comunicação do sucesso

## Troubleshooting

### Problemas Comuns

#### Build Falha
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Verificar versão do Node
node --version
npm --version
```

#### Erro 404 em Rotas
```nginx
# Verificar configuração do Nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

#### Assets não Carregam
```bash
# Verificar permissões
chmod -R 755 /var/www/lunysse
chown -R www-data:www-data /var/www/lunysse
```

#### SSL/HTTPS Issues
```bash
# Verificar certificado
openssl x509 -in certificate.crt -text -noout

# Testar SSL
curl -I https://lunysse.com
```

## Conclusão

Este guia de deploy fornece:

1. **Processos Padronizados**: Workflows consistentes para todos os ambientes
2. **Automação**: CI/CD pipelines para reduzir erros manuais
3. **Monitoramento**: Ferramentas para acompanhar a saúde da aplicação
4. **Recuperação**: Estratégias de rollback e disaster recovery
5. **Escalabilidade**: Configurações preparadas para crescimento

Seguindo estas práticas, o deploy do Lunysse será confiável, rápido e seguro.