<<<<<<< HEAD
# booble-kiss

Site estático com `index.html`, `style.css` e a pasta `imagem/`.

## Como enviar para o GitHub

> Opção recomendada: instale o Git e o GitHub CLI (`gh`) para fazer tudo com poucos comandos.

1. Instale o Git (Windows): https://git-scm.com/download/win
2. Instale o GitHub CLI (opcional mas recomendado): https://cli.github.com/

Comandos para rodar na pasta do projeto:

```bash
# inicializar git (se ainda não existir)
git init
git branch -M main
git add .
git commit -m "Initial commit"

# usando gh (autentique com `gh auth login` antes):
gh repo create booble-kiss --public --source . --remote origin --push

# ou, se preferir criar o repositório no site do GitHub manualmente:
# 1) crie o repositório em https://github.com/new com o nome `booble-kiss`
# 2) então execute:
git remote add origin https://github.com/<seu-usuario>/booble-kiss.git
git push -u origin main
```

Se quiser, posso executar esses comandos para você depois que o Git e o `gh` estiverem instalados e autenticados no seu sistema. 😊
=======
# Front-end
>>>>>>> 9f9caabbeeefa1595b13be4fa77c01eaf077f2de
