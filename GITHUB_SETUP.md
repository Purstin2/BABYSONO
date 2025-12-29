# Instruções para Conectar ao GitHub

## Passo 1: Instalar o Git

1. Baixe o Git em: https://git-scm.com/download/win
2. Execute o instalador e siga as instruções
3. Reinicie o terminal após a instalação

## Passo 2: Configurar o Git (primeira vez)

Abra o terminal e execute:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

## Passo 3: Criar um repositório no GitHub

1. Acesse https://github.com
2. Faça login na sua conta
3. Clique em "New repository" (ou "+" no canto superior direito)
4. Dê um nome ao repositório (ex: "sleep-coach-magic")
5. **NÃO** marque "Initialize this repository with a README"
6. Clique em "Create repository"

## Passo 4: Conectar o projeto local ao GitHub

No terminal, na pasta do projeto, execute:

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# Renomear a branch principal para main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

## Notas Importantes

- Substitua `SEU_USUARIO` e `NOME_DO_REPOSITORIO` pelos valores corretos
- Se o GitHub pedir autenticação, você pode precisar usar um Personal Access Token
- Para criar um token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

## Alternativa: Usar GitHub Desktop

Se preferir uma interface gráfica, baixe o GitHub Desktop:
https://desktop.github.com/

