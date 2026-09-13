# AUDIT.md — Auditoría de la web antes del go-live

Compañero de `audit.sh`. El script hace las comprobaciones automáticas; este
documento explica cómo correrlo, cómo leer el resultado, y los pasos **manuales**
que un script no puede cubrir.

> Se llama `AUDIT.md` (no `AGENTS.md`) a propósito: `AGENTS.md` (reglas de
> construcción, preventivas) vive en la raíz del repo y lo lee Cursor. Si hubiera
> dos `AGENTS.md` se pisarían. Este es la mitad de **verificación**, separada.

---

## Cuándo se corre

Después de que los Cloud Agents terminen TODAS las fases de construcción, y
ANTES del go-live. Es el control de calidad independiente del pipeline.

```
Construcción (Cloud Agents)  →  audit.sh + revisión manual  →  go-live manual
```

## Cómo correrlo

Desde la raíz del repo del cliente:

```
./audit.sh
```

Con dominio (para verificar canonicals en el HTML servido):

```
DOMAIN=sydneylocalroofers.com.au ./audit.sh
```

Para la prueba de fuego del prerender, primero construye:

```
npm run build && DOMAIN=sydneylocalroofers.com.au ./audit.sh
```

Funciona en **macOS** (tu Mac, BSD grep) y **Linux** (VMs de los Cloud Agents,
GNU grep): detecta el grep y adapta los límites de palabra solo.

Variables opcionales (por si el portfolio cambia):
`AREA_CODE`, `ORIGIN_KEYWORDS`, `TOPONYMS` — ver cabecera del script.

---

## Cómo leer el resultado

- **✓ PASS** — ok, nada que hacer.
- **✗ FAIL** — fallo claro. **La web NO está lista.** El script termina con
  código 1 si hay algún FAIL.
- **⚠ REVIEW** — hay hits que **necesitan ojo humano**; pueden ser falsos
  positivos legítimos. El script los muestra pero no decide por ti.

**Por qué existe REVIEW y no todo es verde/rojo:** hay comprobaciones que no se
pueden automatizar sin criterio. Ejemplos reales de las auditorías:
- "Sydney" es legítimo en una web de Sydney, pero un suburb de Sydney colado en
  una web de Hunter Valley NO lo es.
- "victoria" puede ser el estado (mal) o "Victoria Street" (bien).
- "mould" puede ser Nanotise (mal) o moho por filtración de tejado (bien, y buen
  SEO).
- "warranty" en un artículo informativo del blog es legítimo; como promesa
  comercial en la home, no.

Un script que diera verde/rojo automático aquí te haría aprobar un topónimo
colado o corregir un falso positivo. Por eso: **REVIEW = míralo tú**.

**Regla de oro:** correr el script y mirar la salida ANTES de declarar la web
lista. Si hay FAIL, no está lista. Si hay REVIEW, no está lista hasta revisarlos.

---

## Qué cubre el script (resumen por bloque)

| Bloque | Comprobación | Tipo |
|--------|--------------|------|
| 0 | dist/node_modules no versionados; .gitignore correcto | FAIL |
| 1 | teléfono placeholder (03)/1234 5678; prefijo (03); americanismos | FAIL / REVIEW |
| 2 | topónimos foráneos; nicho origen; nombres de archivo; wp-content; GTM; Search Console; colores heredados | FAIL / REVIEW |
| 5 | imágenes rotas; nombres con mayúsculas | FAIL / REVIEW |
| 7 | data-netlify="true"; honeypot con data- | FAIL |
| 8 | palabras prohibidas; em/en dashes | FAIL / REVIEW |
| 4/6 | prerender sin cascarones; canonicals sin .netlify.app; JSON-LD en el HTML (requiere `npm run build`) | FAIL / REVIEW |

---

## Pasos MANUALES que el script NO hace

Estos no se pueden automatizar. Hazlos a mano antes de dar la web por publicada.

### Lectura del contenido a ojo
- Home, About y una página de servicio: buscar frases raras, placeholders sin
  rellenar ("lorem", "[suburb]", "XX years"), o notas de SEO coladas en el texto
  visible ("by having a dedicated page targeting...").

### Go-live (NUNCA automatizar — un error tumba el correo del cliente)
- **Reconectar Netlify** al repo del cliente (no al de la plantilla).
- **DNS en Cloudflare:** apex → `apex-loadbalancer.netlify.com` (CNAME flattening)
  o A `75.2.60.5`; www → `.netlify.app`. **Nube gris (DNS only)** en ambos, o falla
  el SSL.
- **NO tocar los registros MX** del correo.
- **Dominio primario en Netlify** = el que coincide con el canonical del HTML
  (normalmente el apex sin www).
- Verificar en vivo: **SSL con candado**, sin bucle de redirección, el correo
  sigue entrando.
- **GTM y Search Console** reales del cliente (crear los suyos; nunca heredados).
- Enviar el **sitemap** en Search Console.

### Prueba real de formularios (solo en producción)
- Tras desplegar, enviar cada formulario con un texto identificable y confirmar en
  **Netlify > Forms** que llega con todos los campos.
- NO se valida en local ni en preview. Requiere redeploy tras activar la detección
  de formularios. Si no aparece a la primera, redeploy y reintenta.

### Pendientes menores (no bloquean, anotar)
- `npx update-browserslist-db@latest` si el build lo avisa.
- Revisar vulnerabilidades npm.
- Bundle grande / dependencias sin usar (p.ej. recharts) → limpieza opcional
  post-publicación.

---

## Encaje con el kit de construcción

- **Construcción:** `build-config.jsonc` + `AGENTS.md` + los 3 archivos de fases.
  Preventivo: evita que los fallos entren.
- **Verificación:** `audit.sh` + este `AUDIT.md`. Detecta lo que se haya colado.

Los dos `.md` no colisionan: `AGENTS.md` (raíz del repo, lo lee Cursor) y
`AUDIT.md` (documento operativo tuyo). Si el flujo de bots quiere que un agente
corra la auditoría, que ejecute `audit.sh` y reporte PASS/FAIL/REVIEW — no que
"lea" reglas de auditoría (eso ya está en el script).
