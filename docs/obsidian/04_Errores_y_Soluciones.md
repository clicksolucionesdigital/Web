# Errores y Soluciones

## 2026-09-09 - Push rechazado por permisos de GitHub

**Síntoma:**  
`git push -u origin main` respondió `403` para `https://github.com/clicksolucionesdigital/Web.git`.

**Causa:**  
Git en esta máquina intentó publicar usando credenciales cacheadas del usuario `maicolandresb123`, que no tiene permiso de escritura sobre `clicksolucionesdigital/Web`. Además, GitHub CLI no está autenticado.

**Solución aplicada:**  
Se dejó el repositorio local preparado con el remoto correcto y el commit inicial. Falta autenticar Git/GitHub CLI con una cuenta con permisos sobre el repositorio o agregar `maicolandresb123` como colaborador con permiso de escritura.

**Cómo evitarlo:**  
Antes de publicar, verificar `gh auth status` y confirmar que la cuenta autenticada tenga acceso de escritura al repositorio destino.

**Archivos relacionados:**  
- .github/workflows/deploy.yml
- docs/obsidian/13_Deploy_Infraestructura.md
