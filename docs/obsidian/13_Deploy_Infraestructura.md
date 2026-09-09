# Deploy e Infraestructura

## Objetivo

Publicar el sitio como HTML estático en GitHub Pages.

## Configuración actual

- `next.config.ts` usa `output: "export"`.
- `trailingSlash` está activo.
- `images.unoptimized` está activo porque GitHub Pages no corre el optimizador de imágenes de Next.
- `out/` se genera en build y está ignorado por git.
- `.github/workflows/deploy.yml` construye y publica el sitio mediante GitHub Actions.
- `public/.nojekyll` evita que GitHub Pages procese `_next/` como Jekyll.
- `NEXT_PUBLIC_BASE_PATH` se deriva de `GITHUB_REPOSITORY` para que las imágenes públicas carguen bajo `/Web/`.
- GitHub Pages está habilitado con `build_type=workflow`.
- HTTPS está forzado en GitHub Pages.

## GitHub Pages

Si se publica como Project Page, activar:

```bash
GITHUB_PAGES=true npm run build
```

El `basePath` se toma desde `GITHUB_REPOSITORY`.

En GitHub Actions se define `GITHUB_PAGES=true`; GitHub provee `GITHUB_REPOSITORY` automáticamente.

Repositorio remoto previsto:

```text
https://github.com/clicksolucionesdigital/Web
```

URL pública:

```text
https://clicksolucionesdigital.github.io/Web/
```

Último deploy verificado:

```text
GitHub Actions run 34398965376: success
Respuesta pública: 200 OK
```

## Restricciones

- GitHub Pages no ejecuta PHP.
- GitHub Pages no tiene base de datos MySQL.
- No funcionan plugins WordPress ni formularios de Contact Form 7/WPForms.
- El formulario deberá resolverse con servicio externo, mailto, WhatsApp o backend aparte.

## Seguridad

- No publicar SQL, backups, `wp-config.php`, credenciales, logs ni carpetas completas del WordPress original.
- Solo publicar el proyecto estático y assets curados.
