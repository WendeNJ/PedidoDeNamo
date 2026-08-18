# Nossa história

Site em React + Vite com dois capítulos:

- `/` — o pedido de namoro original, com os textos preservados;
- `/6-meses` — a comemoração dos seis meses.

O contador usa **24/01/2026 às 00:00 (UTC−03:00)** como início.

## Rodando localmente

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm run preview
```

O projeto é estático e está pronto para a Vercel. O `vercel.json` garante que a
rota `/6-meses` funcione mesmo quando for acessada diretamente. Não há backend:
o Node.js é usado apenas durante a instalação e o build.
