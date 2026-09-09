# Comandos Runbook

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev -- --hostname 127.0.0.1 --port 5173
```

## Lint

```bash
npm run lint
```

## Build estática

```bash
npm run build
```

## Build para GitHub Pages

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=clicksolucionesdigital/Web npm run build
```

En PowerShell:

```powershell
$env:GITHUB_PAGES="true"; $env:GITHUB_REPOSITORY="clicksolucionesdigital/Web"; npm run build
```

## Vista previa del export

```bash
python -m http.server 8080 -d out
```

## Publicación

```bash
git push
```

El push a `main` dispara `.github/workflows/deploy.yml`.

Para relanzar el deploy manualmente:

```bash
gh workflow run deploy.yml --repo clicksolucionesdigital/Web --ref main
gh run watch --repo clicksolucionesdigital/Web
```

## Verificación pública

```bash
gh api repos/clicksolucionesdigital/Web/pages
```

```powershell
Invoke-WebRequest -Uri https://clicksolucionesdigital.github.io/Web/ -UseBasicParsing
```

## Notas

- El puerto `3000` devolvió `EACCES` en este entorno; se usó `5173`.
- No copiar ni publicar el backup WordPress completo.
