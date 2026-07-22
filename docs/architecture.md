# Arquitetura inicial

Este documento descreve a estrutura inicial do projeto.

- `frontend/`: aplicação cliente em React + Vite + TypeScript.
- `backend/`: API em Node.js + Express + TypeScript.
- `infra/docker/`: arquivos de infraestrutura para containers.
- `tsconfig.base.json`: configurações compartilhadas de TypeScript.
- `package.json`: workspaces para frontend e backend.

A arquitetura inicial está preparada para evoluir para uma aplicação modular com separação clara entre interface, API e infraestrutura.
