# Guía: SSL Gratuito con Cloudflare + Vercel + DonWeb

> Documentado el 01/04/2026  
> Aplicable a dominios `.com.ar` registrados en DonWeb, deployados en Vercel.

---

## Contexto

DonWeb cobra extra por activar SSL en sus dominios. Esta guía explica cómo obtener SSL **gratuito** usando **Cloudflare** como intermediario, apuntando el dominio a un proyecto ya deployado en **Vercel**.

---

## Requisitos previos

- Dominio registrado y activo en DonWeb
- Cuenta en [Cloudflare](https://cloudflare.com) (gratuita)
- Proyecto deployado en [Vercel](https://vercel.com) conectado a un repo de GitHub

---

## Paso 1: Agregar el dominio en Cloudflare

1. Ingresá a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Hacé clic en **"Add a domain"**
3. Escribí tu dominio (ej: `jotadev.com.ar`) y hacé clic en **Continue**
4. Seleccioná el plan **Free ($0)** → **Continue**
5. Cloudflare escaneará los DNS automáticamente (es normal que no encuentre nada si el dominio es nuevo)
6. Hacé clic en **"Continue to activation"**

---

## Paso 2: Obtener los Nameservers de Cloudflare

En la pantalla siguiente, Cloudflare te muestra los nameservers asignados. Hacé clic en **"Show nameserver instructions"** para verlos claramente. Son algo así:

```
izabella.ns.cloudflare.com
luke.ns.cloudflare.com
```

> ⚠️ Los nombres exactos varían por cuenta. Copiálos desde tu panel, no los escribas de memoria.

---

## Paso 3: Cambiar los Nameservers en DonWeb

1. Ingresá a tu cuenta en [donweb.com](https://donweb.com)
2. Andá a **Mis dominios** → seleccioná tu dominio
3. Hacé clic en la pestaña **NS y Registros DNS**
4. Hacé clic en **"Editar nameservers"**
5. Reemplazá los valores actuales:
   - ~~`ns1.donweb.com`~~ → `izabella.ns.cloudflare.com` *(el tuyo)*
   - ~~`ns2.donweb.com`~~ → `luke.ns.cloudflare.com` *(el tuyo)*
6. Guardá los cambios

> ⏳ La propagación puede tardar entre 15 minutos y 24 horas. Cloudflare te avisa por email cuando está activo.

---

## Paso 4: Agregar el dominio en Vercel

1. Ingresá a tu proyecto en [vercel.com](https://vercel.com)
2. Andá a **Settings → Domains**
3. Agregá los dos dominios:
   - `jotadev.com.ar`
   - `www.jotadev.com.ar`
4. Vercel mostrará **"Invalid Configuration"** con los registros DNS que necesitás agregar

Los registros que te va a pedir son generalmente:

| Tipo | Name | Value |
|------|------|-------|
| `A` | `@` | `216.198.79.1` *(puede variar)* |
| `CNAME` | `www` | `xxxxxxxx.vercel-dns-017.com` *(el tuyo)* |

> Copiá los valores exactos desde el panel de Vercel, no los escribas de memoria.

---

## Paso 5: Agregar los registros DNS en Cloudflare

1. Ingresá a Cloudflare → tu dominio → **DNS → Records**
2. Hacé clic en **"Add record"** y cargá cada registro:

**Registro A (dominio raíz):**
- Type: `A`
- Name: `@`
- IPv4 address: *(el que te dio Vercel)*
- Proxy status: **DNS only** (nube gris) ← importante

**Registro CNAME (www):**
- Type: `CNAME`
- Name: `www`
- Target: *(el que te dio Vercel)*
- Proxy status: **DNS only** (nube gris) ← importante

> ⚠️ El proxy debe estar en **gris (DNS only)** y NO en naranja. Si lo dejás en naranja puede generar conflictos de SSL entre Cloudflare y Vercel.

---

## Paso 6: Verificar

1. Volvé a Vercel → **Settings → Domains**
2. Hacé clic en **Refresh** en cada dominio
3. En pocos minutos deberían mostrar ✅ **"Valid Configuration"**
4. El SSL se activa automáticamente, sin costo adicional

---

## Resultado final esperado

```
jotadev.com.ar        ✅ Valid Configuration  →  redirige a www
www.jotadev.com.ar    ✅ Valid Configuration  →  Production
```

El candado 🔒 aparece en el navegador indicando **"La conexión es segura"**.

---

## Notas adicionales

- **Para el segundo dominio:** si está pendiente de aprobación del NIC, esperá a que quede activo y repetí exactamente los mismos pasos.
- **Si usás WordPress:** instalar el plugin [Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/) para que maneje las redirecciones.
- **Renovación del SSL:** Cloudflare renueva el certificado automáticamente, no hay que hacer nada manual.
- **Deploy automático:** cada `git push` al branch principal actualiza el sitio en Vercel automáticamente.

---

## Resumen rápido

```
DonWeb (dominio) → Cloudflare (SSL + DNS) → Vercel (hosting + deploy)
```
