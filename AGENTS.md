# AGENTS.md — Reglas para Cloud Agents (construcción de webs de trades)

Este archivo vive en la RAÍZ del repo. Cursor lo lee automáticamente. Toda tarea
en este repo DEBE respetar estas reglas. Están destiladas de errores reales
detectados en auditorías previas: cada regla evita un fallo que ya ha pasado.

## Principio rector

Haz el **cambio mínimo viable**. Adaptas un template existente a un cliente nuevo;
NO reconstruyes infraestructura que ya funciona (prerender, validadores,
netlify.toml, plantillas). No refactorices, no reformatees, no "limpies" fuera del
alcance de tu tarea. No explores el codebase más de lo necesario.

## Fuente única de la verdad

- Todos los datos del negocio (nombre, teléfono, email, horas, áreas, assets de
  marca) viven en `src/data/business.ts`. Header, Footer, plantillas y schema leen
  de ahí.
- **NUNCA** hardcodees teléfono, email o dirección en ningún otro archivo.
- El teléfono se guarda en tres formatos derivados del display:
  `phoneDisplay: "(02) 8105 6073"`, `phoneHref: "tel:0281056073"`,
  `phoneSchema: "+61 2 8105 6073"`. El schema va en E.164 SIN el 0 inicial.

## Prohibiciones de contenido (nicho origen y errores conocidos)

- **Teléfono**: nunca el placeholder `(03) 1234 5678`. Usa el número real del
  config, con el prefijo de área CORRECTO de la ubicación (NSW = 02).
- **Purga el nicho origen**: ningún término de `originKeywords` puede quedar en
  textos, slugs, nombres de archivo ni imágenes.
- **Topónimos**: solo la ubicación del cliente. Nada de ciudades/suburbs de otras
  webs del portfolio.
- **Palabras prohibidas**: no uses warranty, guarantee, guaranteed, lifetime,
  assured (ni variantes) en textos de cara al cliente.
- **Inglés australiano**: colour, fibreglass, organise, specialise, centre,
  neighbour. Nunca inglés US. (Excepción: "Colorbond" es marca, se escribe así.)
- **Sin em dashes (—) ni en dashes (–)** en ningún texto ni string. Usa guion
  normal `-` o `·`.
- **Sin apóstrofos rectos** dentro de string literals que luego se generen por
  heredoc (rompen la generación posterior).

## Git / repo

- `.gitignore` DEBE incluir `node_modules/` y `dist/`. Nunca los versiones.
- No hagas `git push --force` salvo en el primer traspaso a un repo vacío.

## Formularios (esto pierde dinero si falla)

- El formulario señuelo de detección en `index.html` DEBE tener
  `data-netlify="true"` (NO `netlify` a secas) y `data-netlify-honeypot="bot-field"`
  (CON el prefijo `data-`). Debe declarar todos los campos del formulario real.
- Los formularios React envían por el mismo mecanismo (`submitToNetlify` o
  equivalente) con un único `form-name`.

## Tracking

- El nombre de cookie/storage de tracking es el del config
  (`trackingCookieName`). Nunca dejes un nombre heredado de otra web.

## Marca / colores

- Los colores del negocio salen de los tokens de la marca (Tailwind config). No
  dejes hex sueltos heredados del template en componentes.
- Nombres de archivo de imagen SIEMPRE en minúsculas, con guiones, sin espacios
  (Netlify distingue mayúsculas; macOS no — un desajuste rompe en producción).

## SEO / schema

- Canonicals: dominio de PRODUCCIÓN del config, con barra final. Nunca el
  subdominio `.netlify.app`.
- El logo del schema y la OG salen de `business.ts` (assets del cliente), nunca de
  otra web.
- Cada plantilla emite el schema que le toca (LocalBusiness en home, Service en
  servicios, FAQPage donde haya FAQs, BreadcrumbList en internas, Article en
  guías/blog).

## Al terminar una tarea

- Ejecuta `npm run build` y confirma que pasa (validadores, prerender N succeeded
  / 0 failed, verify:dist en verde).
- Abre un PR con resumen de 5-7 líneas: qué cambiaste y por qué. No incluyas
  cambios fuera del alcance de la tarea.

## Lo que NO debes tocar nunca

- La maquinaria de prerender (`scripts/prerender-ssr.tsx`), los validadores
  `check-*`, `netlify.toml` (salvo que la tarea lo pida explícitamente).
- Nada relacionado con DNS, dominios o despliegue: eso es manual y fuera del repo.
