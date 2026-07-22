# ChatMultilingue

Estrutura inicial da plataforma web de aprendizado de idiomas com IA.

## Organização

- `frontend/` - aplicação cliente em React + Vite + TypeScript.
- `backend/` - API em Node.js + Express + TypeScript.
- `infra/docker/` - exemplos de Dockerfiles e docker-compose.

## Como usar

Instale dependências no diretório raiz e utilize os workspaces:

```bash
npm install
npm run dev:frontend
npm run dev:backend
```

## Próximos passos

- implementar autenticação e rota de saúde no backend
- estruturar telas de dashboard, chat e lições no frontend
- adicionar banco de dados e integração com provedores de IA
