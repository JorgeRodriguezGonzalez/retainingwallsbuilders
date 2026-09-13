#!/usr/bin/env bash
#
# audit.sh — Auditoría automática de webs de trades (React+Vite) antes del go-live.
# Detecta los fallos que se repiten al adaptar un template a un cliente nuevo.
#
# Uso:   ./audit.sh            (desde la raíz del repo del cliente)
#        DOMAIN=sydneylocalroofers.com.au ./audit.sh
#
# Funciona en macOS (BSD grep) y Linux (GNU grep) — detecta el grep y adapta
# los límites de palabra. Corre TODO y no aborta a la primera.
#
# Veredictos:
#   ✓ PASS    ok
#   ✗ FAIL    fallo claro, la web NO está lista
#   ⚠ REVIEW  hits que necesitan ojo humano (pueden ser falsos positivos)
#
# Lo que este script NO hace (es MANUAL, ver AUDIT.md):
#   - Go-live: DNS, MX del correo, dominio primario en Netlify.
#   - Prueba real de formularios en producción (Netlify > Forms).
#   - Lectura del contenido a ojo (tono, frases raras).
# ---------------------------------------------------------------------------

# No usamos 'set -e': un grep sin coincidencias devuelve !=0 y es lo esperado.

# ---- CONFIG (opcional; se puede sobreescribir por variable de entorno) ----
DOMAIN="${DOMAIN:-}"                       # p.ej. sydneylocalroofers.com.au (para canonicals)
AREA_CODE="${AREA_CODE:-02}"               # prefijo correcto de la zona (NSW=02)
ORIGIN_KEYWORDS="${ORIGIN_KEYWORDS:-mould|mold|nanotise|pergola|floor sanding|pool builder|exclusive floor}"
TOPONYMS="${TOPONYMS:-wollongong|illawarra|melbourne|victoria|brisbane|canberra|newcastle|maitland|cessnock|nelson bay|hunter valley|inner west}"

# ---- Colores ----
if [ -t 1 ] && [ -z "${NO_COLOR:-}" ]; then
  RED=$'\033[31m'; GREEN=$'\033[32m'; YELLOW=$'\033[33m'; BLUE=$'\033[34m'; BOLD=$'\033[1m'; RESET=$'\033[0m'
else
  RED=""; GREEN=""; YELLOW=""; BLUE=""; BOLD=""; RESET=""
fi

PASS=0; FAIL=0; REVIEW=0

# ---- Detección del grep: fija los límites de palabra WL / WR ----
if printf 'word' | grep -qE '[[:<:]]word[[:>:]]' 2>/dev/null; then
  WL='[[:<:]]'; WR='[[:>:]]'                # BSD grep (macOS)
elif printf 'word' | grep -qE '\bword\b' 2>/dev/null; then
  WL='\b'; WR='\b'                          # GNU grep (Linux)
else
  WL=''; WR=''                              # fallback (más falsos positivos)
fi

# ---- Helpers ----
hdr()    { printf "\n${BOLD}${BLUE}== %s ==${RESET}\n" "$1"; }
pass()   { printf "  ${GREEN}✓${RESET} %s\n" "$1"; PASS=$((PASS+1)); }
fail()   { printf "  ${RED}✗ %s${RESET}\n" "$1"; FAIL=$((FAIL+1)); }
review() { printf "  ${YELLOW}⚠ %s${RESET}\n" "$1"; REVIEW=$((REVIEW+1)); }
info()   { printf "  ${BLUE}i${RESET} %s\n" "$1"; }
show()   { printf "%s\n" "$1" | head -15 | sed 's/^/      /'; }

# expect_empty DESC OUTPUT   → PASS si vacío, FAIL si hay hits (los muestra)
expect_empty() { if [ -z "$2" ]; then pass "$1"; else fail "$1"; show "$2"; fi; }
# expect_review DESC OUTPUT NOTE → PASS si vacío, REVIEW si hay hits (los muestra)
expect_review() { if [ -z "$2" ]; then pass "$1 (sin hits)"; else review "$1 — $3"; show "$2"; fi; }

# ---- Comprobación de que estamos en la raíz del repo ----
if [ ! -d src ] || [ ! -f index.html ]; then
  printf "${RED}No encuentro src/ e index.html. Corre audit.sh desde la raíz del repo.${RESET}\n"
  exit 2
fi

printf "${BOLD}Auditoría de %s${RESET}\n" "$(basename "$(pwd)")"
[ -n "$DOMAIN" ] && info "Dominio esperado: $DOMAIN"
[ -z "$WL" ] && info "grep sin límites de palabra: revisa los REVIEW con más cuidado."

# ===========================================================================
hdr "BLOQUE 0 — Repo"
tracked=$(git ls-files 2>/dev/null | grep -cE "^(dist|node_modules)/" | tr -d ' ')
if [ "${tracked:-0}" = "0" ]; then pass "dist/ y node_modules/ NO versionados"; else fail "dist/node_modules versionados en git ($tracked archivos)"; fi
if grep -qE '^/?node_modules/?$' .gitignore 2>/dev/null && grep -qE '^/?dist/?$' .gitignore 2>/dev/null; then
  pass ".gitignore incluye node_modules/ y dist/"
else
  fail ".gitignore NO incluye node_modules/ y/o dist/"
fi

# ===========================================================================
hdr "BLOQUE 1 — Identidad / teléfono"
ph=$(grep -rniIE "1234 ?5678|\(03\) ?1234|0312345678|\+61 ?3 ?1234" src/ index.html 2>/dev/null)
expect_empty "Sin teléfono placeholder (1234 5678 / (03))" "$ph"
a03=$(grep -rniIE "phone(display|href|schema).{0,20}(\(03\)|tel:03|\+61 ?3)" src/data/ 2>/dev/null)
expect_review "Prefijo (03) en business.ts" "$a03" "Victoria/Tas. Si el negocio es NSW debería ser ($AREA_CODE)"
ame=$(grep -rniIE "${WL}(fiberglass|favorite|favorites|organize|specialize|customize|maximize|optimize)${WR}" src/ 2>/dev/null)
expect_review "Americanismos en texto" "$ame" "revisar: inglés australiano (fibreglass, organise...). Colorbond es marca, ok"

# ===========================================================================
hdr "BLOQUE 2 — Herencia de la web origen"
top=$(grep -rniIE "${WL}(${TOPONYMS})${WR}" src/ 2>/dev/null | cut -d: -f1 | sort | uniq -c | sort -rn)
expect_review "Topónimos foráneos" "$top" "algunos legítimos (contexto geográfico, 'Victoria St'); revisar CADA archivo"
onk=$(grep -rniIE "${WL}(${ORIGIN_KEYWORDS})${WR}" src/ 2>/dev/null | cut -d: -f1 | sort | uniq -c | sort -rn)
expect_review "Restos del nicho origen" "$onk" "revisar: p.ej. 'mould' puede ser moho legítimo en roofing"
fn=$(find src/ -type f 2>/dev/null | grep -iE "pergola|pool|floor-sand|sanding|nanotise|wollongong|melbourne|maitland" )
expect_review "Nombres de archivo del sector/zona equivocada" "$fn" "revisar"
wp=$(grep -rn "wp-content" src/ index.html 2>/dev/null)
expect_empty "Sin wp-content (imágenes del WordPress viejo)" "$wp"
gtm=$(grep -rniE "GTM-[A-Z0-9]{5,}|googletagmanager|gtm\.start" src/ index.html 2>/dev/null)
expect_empty "Sin GTM heredado (se añade el tuyo en go-live)" "$gtm"
gsc=$(grep -rn "google-site-verification" src/ index.html 2>/dev/null)
expect_review "google-site-verification" "$gsc" "debe ser el tuyo o ninguno; nunca heredado"
hex=$(grep -rniE "#C5995B|#D2A769|#231F20|#0f1830|#f58220|#FCB900|252, ?185, ?0" src/ 2>/dev/null)
expect_review "Colores hex conocidos de otras webs" "$hex" "confirmar que no pertenecen a ESTA marca"

# ===========================================================================
hdr "BLOQUE 5 — Imágenes"
tmpref="$(mktemp)"; tmpexist="$(mktemp)"
grep -rhoE "/images/[A-Za-z0-9_.-]+\.(webp|jpg|jpeg|png|svg|avif)" src/ 2>/dev/null | sed 's|.*/images/||' | sort -u > "$tmpref"
ls -1 public/images/ 2>/dev/null | sort -u > "$tmpexist"
broken=$(comm -23 "$tmpref" "$tmpexist" 2>/dev/null)
expect_empty "Imágenes referenciadas que existen en public/images/" "$broken"
upper=$(grep -rhoE "/images/[A-Za-z0-9_.-]+\.(webp|jpg|jpeg|png|svg|avif)" src/ 2>/dev/null | grep -E "[A-Z]" | sort -u)
expect_review "Nombres de imagen con mayúsculas" "$upper" "Netlify distingue may/min; renombrar a minúsculas"
rm -f "$tmpref" "$tmpexist"

# ===========================================================================
hdr "BLOQUE 7 — Formularios (pierde leads si falla)"
formline=$(grep -niE '<form[^>]*netlify' index.html 2>/dev/null)
if [ -z "$formline" ]; then
  fail "index.html: no encuentro el formulario señuelo de Netlify"
elif printf '%s' "$formline" | grep -qE 'data-netlify="true"'; then
  pass "index.html: señuelo con data-netlify=\"true\""
else
  fail "index.html: señuelo con 'netlify' a secas (falta data-netlify=\"true\") → NO capta leads"
  show "$formline"
fi
hp_bad=$(grep -rniE 'netlify-honeypot' src/ index.html 2>/dev/null | grep -viE 'data-netlify-honeypot')
expect_empty "Honeypot con prefijo data- (data-netlify-honeypot)" "$hp_bad"

# ===========================================================================
hdr "BLOQUE 8 — Palabras prohibidas y dashes"
fw_comm=$(grep -rniIE "${WL}(warranty|guarantee|guaranteed|lifetime|assured)${WR}" src/ 2>/dev/null | grep -viE "/blog/|legacy-posts|/guides/")
expect_empty "Sin palabras prohibidas en contenido comercial" "$fw_comm"
fw_blog=$(grep -rniIE "${WL}(warranty|guarantee|guaranteed|lifetime|assured)${WR}" src/ 2>/dev/null | grep -iE "/blog/|legacy-posts|/guides/")
expect_review "Palabras prohibidas en blog/guías" "$fw_blog" "informativo puede ser ok ('does warranty cover...'); promesas comerciales NO"
em=$(grep -rn "—" src/ 2>/dev/null); expect_empty "Sin em dashes (—)" "$em"
en=$(grep -rn "–" src/ 2>/dev/null); expect_empty "Sin en dashes (–)" "$en"

# ===========================================================================
hdr "BLOQUE 4/6 — Prerender y schema (requiere dist/)"
if [ -d dist ]; then
  shells=$(find dist -name "index.html" -size -5k 2>/dev/null)
  expect_empty "Sin cascarones prerender (<5KB)" "$shells"
  canbad=$(grep -rhoE 'rel="canonical"[^>]*netlify\.app' dist 2>/dev/null | head)
  expect_empty "Canonicals sin .netlify.app en el HTML servido" "$canbad"
  if [ -n "$DOMAIN" ]; then
    canok=$(grep -rl "canonical.*$DOMAIN" dist 2>/dev/null | head -1)
    if [ -n "$canok" ]; then pass "Canonicals apuntan a $DOMAIN"; else review "No veo canonicals a $DOMAIN en dist (revisar)"; fi
  fi
  ldjson=$(grep -rl "application/ld+json" dist 2>/dev/null | head -1)
  if [ -n "$ldjson" ]; then pass "Schema JSON-LD presente en el HTML servido"; else fail "No hay JSON-LD en dist/"; fi
else
  info "dist/ no existe — corre 'npm run build' y repite para la prueba de fuego del prerender."
fi

# ===========================================================================
printf "\n${BOLD}Resumen:${RESET} ${GREEN}%s PASS${RESET}  ${RED}%s FAIL${RESET}  ${YELLOW}%s REVIEW${RESET}\n" "$PASS" "$FAIL" "$REVIEW"
if [ "$FAIL" -gt 0 ]; then
  printf "${RED}${BOLD}La web NO está lista: hay %s fallo(s).${RESET}\n" "$FAIL"
  printf "Revisa además los %s REVIEW a ojo. Nada de go-live hasta cerrar los FAIL.\n" "$REVIEW"
  exit 1
else
  printf "${GREEN}${BOLD}Sin FAIL.${RESET} Revisa los %s REVIEW a mano y haz los pasos MANUALES de AUDIT.md antes del go-live.\n" "$REVIEW"
  exit 0
fi
