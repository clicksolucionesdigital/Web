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
GITHUB_PAGES=true npm run build
```

En PowerShell:

```powershell
$env:GITHUB_PAGES="true"; npm run build
```

## Vista previa del export

```bash
python -m http.server 8080 -d out
```

## Notas

- El puerto `3000` devolvió `EACCES` en este entorno; se usó `5173`.
- No copiar ni publicar el backup WordPress completo.
