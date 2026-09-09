# Errores y Soluciones

## 2026-09-09 - Push rechazado por permisos de GitHub

**Síntoma:**  
`git push -u origin main` respondió `403` para `https://github.com/clicksolucionesdigital/Web.git`.

**Causa:**  
Git en esta máquina intentó publicar usando credenciales cacheadas del usuario `maicolandresb123`, que no tenía permiso de escritura sobre `clicksolucionesdigital/Web`. Además, GitHub CLI no estaba autenticado.

**Solución aplicada:**  
Se inició sesión en GitHub CLI como `clicksolucionesdigital` con permisos `repo` y `workflow`. Luego `git push -u origin main` publicó la rama correctamente.

**Cómo evitarlo:**  
Antes de publicar, verificar `gh auth status` y confirmar que la cuenta autenticada tenga acceso de escritura al repositorio destino.

**Archivos relacionados:**  
- .github/workflows/deploy.yml
- docs/obsidian/13_Deploy_Infraestructura.md

## 2026-09-09 - Deploy de Pages falló porque Pages no estaba habilitado

**Síntoma:**  
El primer workflow compiló y subió el artifact, pero `actions/deploy-pages@v4` falló con `Failed to create deployment (status: 404)` y pidió habilitar GitHub Pages.

**Causa:**  
El repositorio era nuevo y GitHub Pages todavía no estaba creado para `clicksolucionesdigital/Web`.

**Solución aplicada:**  
Se creó GitHub Pages por API con `build_type=workflow` y se re-ejecutó el workflow `Deploy to GitHub Pages`. El run `34398965376` terminó correctamente y publicó `https://clicksolucionesdigital.github.io/Web/`.

**Cómo evitarlo:**  
En repositorios nuevos, habilitar Pages en modo GitHub Actions antes del primer deploy o hacerlo por API con una cuenta con permisos de administración.

**Archivos relacionados:**  
- .github/workflows/deploy.yml
- docs/obsidian/13_Deploy_Infraestructura.md
