# ⚠️ IMPORTANTE: Reinicie o Terminal

Após instalar o Git, você precisa **fechar e abrir novamente** o PowerShell/terminal para que o Git seja reconhecido.

## Passo a Passo:

1. **Feche este terminal completamente**
2. **Abra um novo PowerShell/Terminal**
3. **Navegue até a pasta do projeto:**
   ```powershell
   cd "C:\Users\Vibox\Downloads\sleep-coach-magic-main\sleep-coach-magic-main"
   ```

4. **Execute o script que criei:**
   ```powershell
   .\connect-github.ps1
   ```

   **OU execute os comandos manualmente:**

   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Sleep Coach Magic project"
   git remote add origin https://github.com/Purstin2/BABYSONO.git
   git branch -M main
   git push -u origin main
   ```

## Se aparecer erro de autenticação:

Se o GitHub pedir usuário/senha, você precisará usar um **Personal Access Token**:

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Dê um nome ao token (ex: "BABYSONO Project")
4. Selecione o escopo `repo` (dá acesso completo aos repositórios)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (ele não será mostrado novamente!)
7. Use o token como senha quando o Git pedir credenciais

## Verificar se o Git está instalado:

Depois de reiniciar o terminal, execute:
```powershell
git --version
```

Se aparecer a versão do Git, está tudo certo! 🎉

