
# 🚀 Guia Completo de Deploy no Vercel

## ✅ Status do Projeto
- ✅ Projeto NextJS pronto para deploy
- ✅ Todas as dependências configuradas
- ✅ Logo otimizado e no local correto
- ✅ Formulário de contato funcional
- ✅ Arquivo de configuração Vercel criado

## 🎯 MÉTODO 1: Deploy via GitHub (RECOMENDADO)

### Passo 1: Criar Repositório GitHub
1. Acesse https://github.com
2. Clique em **"New repository"**
3. Nome: `inteligencia-evolutiva-site` (ou outro de sua escolha)
4. Defina como **Público** ou **Privado**
5. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos
**OPÇÃO A - Via Interface Web:**
1. Na página do repositório criado
2. Clique em **"uploading an existing file"**
3. Arraste todos os arquivos da pasta `/home/ubuntu/inteligencia_evolutiva/app/`
4. Commit message: "Initial commit - Inteligência Evolutiva Website"
5. Clique em **"Commit changes"**

**OPÇÃO B - Via Git (se tiver Git instalado):**
```bash
cd /home/ubuntu/inteligencia_evolutiva/app/
git init
git add .
git commit -m "Initial commit - Inteligência Evolutiva Website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/inteligencia-evolutiva-site.git
git push -u origin main
```

### Passo 3: Conectar Vercel ao GitHub
1. Acesse https://vercel.com/dashboard
2. Clique em **"New Project"**
3. Clique em **"Import Git Repository"**
4. Selecione seu repositório `inteligencia-evolutiva-site`
5. **Framework Preset**: Next.js (deve detectar automaticamente)
6. **Root Directory**: `./` (raiz)
7. Clique em **"Deploy"**

### Passo 4: Aguardar Deploy
- ⏱️ Tempo estimado: 2-5 minutos
- 🔄 Vercel vai instalar dependências e fazer build
- ✅ Ao finalizar, você receberá o link do site

---

## ⚡ MÉTODO 2: Deploy Direto (Mais Rápido)

### Passo 1: Baixar Arquivos do Projeto
1. Baixe todos os arquivos da pasta `/home/ubuntu/inteligencia_evolutiva/app/`
2. Compacte em um arquivo .zip

### Passo 2: Deploy via CLI da Vercel
1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções do terminal
4. Confirme as configurações
5. Aguarde o deploy

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente
Se precisar de variáveis de ambiente:
1. No painel Vercel → **Settings** → **Environment Variables**
2. Adicione as variáveis necessárias

### Domínio Personalizado
1. No painel Vercel → **Settings** → **Domains**
2. Adicione seu domínio personalizado
3. Configure DNS conforme instruções

---

## 📋 Checklist Final

- [ ] Repositório GitHub criado
- [ ] Arquivos enviados para GitHub
- [ ] Projeto conectado ao Vercel
- [ ] Deploy realizado com sucesso
- [ ] Site testado no link fornecido
- [ ] Formulário de contato funcionando
- [ ] Responsividade verificada
- [ ] Domínio personalizado (opcional)

---

## 🆘 Possíveis Problemas e Soluções

### Erro de Build
- Verifique se todos os arquivos foram enviados
- Confirme se package.json está na raiz
- Verifique console de erros no Vercel

### Imagens não Carregam
- Verifique se logo.png está em `/public/`
- Confirme paths das imagens nos componentes

### Formulário não Funciona
- API routes devem estar em `/app/api/`
- Verifique se arquivo de API foi enviado

---

## 📞 Suporte
Em caso de dúvidas:
1. Console do Vercel mostra logs detalhados
2. Documentação: https://vercel.com/docs
3. GitHub Issues do projeto
