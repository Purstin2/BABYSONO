# Script para conectar o projeto ao GitHub
# Execute este script após reiniciar o terminal

Write-Host "Conectando ao GitHub..." -ForegroundColor Green

# Inicializar repositório Git
Write-Host "Inicializando repositório Git..." -ForegroundColor Yellow
git init

# Adicionar todos os arquivos
Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer o primeiro commit
Write-Host "Fazendo commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit: Sleep Coach Magic project"

# Adicionar o repositório remoto
Write-Host "Conectando ao repositório remoto..." -ForegroundColor Yellow
git remote add origin https://github.com/Purstin2/BABYSONO.git

# Renomear branch para main
Write-Host "Configurando branch main..." -ForegroundColor Yellow
git branch -M main

# Enviar para o GitHub
Write-Host "Enviando para o GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "Concluído! Projeto conectado ao GitHub." -ForegroundColor Green

