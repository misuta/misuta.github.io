---
layout: post
title: "Lightning en Kraken (2026): enviar y recibir bitcoin"
date: 2026-11-13 06:00:00 +0100
categories: [guia]
tags: [lightning, bitcoin, btc, kraken, guia, pagos, sats]
description: "Retira y deposita bitcoin por Lightning en Kraken: qué red elegir, cómo pegar una factura lnbc, importes, comisiones y qué wallet usar. Guía en 5 pasos."
image: /assets/images/lightning-en-kraken-enviar-y-recibir-bitcoin.webp
author: Yukio Mizuta
faq:
  - question: "¿Kraken permite enviar y recibir bitcoin por Lightning?"
    answer: "Sí. Kraken permite retirar y depositar BTC por Lightning Network además de por la cadena principal. La disponibilidad puede variar según el país, así que comprueba en tu cuenta que la red Lightning aparece al retirar y al depositar."
  - question: "¿Puedo retirar de Kraken a una Lightning address?"
    answer: "El proceso que documenta Kraken para retirar por Lightning usa una factura (invoice) que empieza por lnbc, generada por tu wallet con el importe indicado. No cuentes con poder pegar una Lightning address tipo usuario@dominio: genera una factura en tu wallet y pégala en Kraken."
  - question: "¿Cuánto cuesta retirar bitcoin por Lightning en Kraken?"
    answer: "Las comisiones de Lightning suelen ser muy bajas, pero Kraken fija las suyas, así como los mínimos y máximos por operación, y pueden cambiar. Antes de confirmar, Kraken te muestra la comisión y los límites que se aplican a tu retiro."
  - question: "¿Puedo enviar bitcoin por Lightning a mi Trezor o Keystone?"
    answer: "No. Trezor y Keystone son wallets de hardware para guardar bitcoin on-chain y no reciben pagos por Lightning. Para Lightning necesitas una wallet Lightning, custodial o no custodial. Para tus ahorros, retira on-chain a tu wallet de hardware."
  - question: "¿Cuánto tarda un depósito por Lightning en Kraken?"
    answer: "Normalmente segundos. Al no depender de los bloques de Bitcoin, no hay que esperar confirmaciones como en un depósito on-chain. Eso sí, la factura que genera Kraken caduca, así que págala poco después de crearla."
---

Ya vimos [¿Qué es Lightning Network?](/2026/11/09/que-es-lightning-network/) y [cuándo conviene usar Lightning en vez de la cadena principal](/2026/11/11/bitcoin-on-chain-vs-lightning/). Lightning no tiene token propio, así que aquí no hay nada nuevo que comprar: lo que vas a mover es bitcoin. En esta guía te mostramos cómo **enviar y recibir BTC por Lightning en Kraken**, paso a paso, estés en España, el resto de Europa, Latinoamérica, EE. UU. o Canadá.

<!--more-->

> **Aviso de afiliado:** Este artículo contiene enlaces de afiliado a Kraken, Trezor y Keystone. Si abres una cuenta o compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener el blog. Gracias por tu apoyo. 🙏

## Por qué Kraken para usar Lightning

Kraken es uno de los exchanges más antiguos del mercado, con buena reputación en seguridad y presencia regulatoria en Europa, Latinoamérica, EE. UU. y Canadá. Permite **depositar y retirar BTC tanto on-chain como por Lightning**, así que puedes usar el mismo exchange para mandar tus ahorros a una wallet de hardware y para recargar en segundos tu wallet del día a día. Además, Kraken opera su propio nodo Lightning.

Es el mismo exchange que usamos en nuestra guía para [comprar Bitcoin](/2026/04/14/como-comprar-bitcoin-en-kraken/). Si ya tienes cuenta y BTC, puedes saltar directamente al paso 4.

La disponibilidad de Lightning puede variar según tu país. Antes de depositar, comprueba en tu cuenta que la red Lightning aparece entre las opciones de BTC.

## Paso 1: Crea tu cuenta

Entra en Kraken a través de este enlace:

👉 [**Registrarse en Kraken**](https://invite.kraken.com/JDNW/nmlddl67)

Regístrate con tu email y crea una contraseña robusta. Te recomendamos activar la autenticación de dos factores (2FA) desde el primer momento, antes incluso de depositar fondos.

## Paso 2: Verifica tu identidad

Kraken pide verificación de identidad (KYC) para operar y retirar. En España/Europa suele bastar con DNI o pasaporte y una foto; en Latinoamérica algunos países piden también un justificante de domicilio; en EE. UU. y Canadá se añaden requisitos propios (SSN o ITIN en EE. UU.). Te lo explicamos con más detalle en la [guía para comprar Bitcoin en Kraken](/2026/04/14/como-comprar-bitcoin-en-kraken/).

## Paso 3: Deposita fondos y compra BTC

Este paso es igual que en cualquier compra de bitcoin, así que te lo resumimos:

- **Deposita:** transferencia SEPA en España/Europa (sin comisión, 1-2 días hábiles) o tarjeta (instantánea, con comisión); métodos locales o stablecoins en Latinoamérica; ACH, wire o Interac en EE. UU. y Canadá.
- **Compra:** busca el par BTC/EUR o BTC/USD y compra con una orden de mercado (al precio actual) o límite (al precio que tú fijes).

El proceso completo, con los tipos de orden explicados, está en [Cómo comprar Bitcoin en Kraken](/2026/04/14/como-comprar-bitcoin-en-kraken/).

## Antes de seguir: elige tu wallet Lightning

Para enviar y recibir por Lightning necesitas una **wallet Lightning**. Hay dos tipos:

- **Custodial:** la más sencilla, sin canales ni configuración. A cambio, el proveedor controla tus bitcoins.
- **No custodial:** tú controlas tus claves y la wallet gestiona los canales por ti. Guarda bien la frase de recuperación.

Una wallet Lightning está siempre conectada a internet, así que úsala para el gasto del día a día, no para tus ahorros. **Trezor y Keystone no reciben por Lightning:** son para guardar bitcoin on-chain (lo vemos al final).

## Paso 4: Retira BTC por Lightning

Así envías bitcoin desde Kraken a tu wallet Lightning:

1. En Kraken, pulsa **Retirar** y elige **Bitcoin (BTC)**.
2. Selecciona la red **Lightning**. La primera vez, Kraken te pedirá aceptar sus condiciones para este servicio.
3. En tu wallet Lightning, pulsa **Recibir** e **indica el importe** que quieres retirar. Kraken necesita una factura con importe: no la dejes en blanco.
4. Copia la factura (empieza por `lnbc`) o escanea su QR, y pégala en Kraken.
5. Revisa el importe, la comisión y los límites que muestra Kraken, y confirma.

El retiro pasa a estado *Initiated* y en segundos tendrás los sats en tu wallet.

Ten en cuenta que:

- **La factura fija el importe**, no el campo de Kraken. Si quieres retirar otra cantidad, genera una factura nueva.
- **Las facturas caducan.** Si tardas en pegarla, puede que tengas que crear otra.
- **Usa facturas, no Lightning addresses.** El proceso que documenta Kraken funciona con facturas `lnbc`, así que no cuentes con poder pegar una dirección tipo `usuario@dominio`.
- **No mezcles redes.** Una dirección `bc1`, `1` o `3` es para retiros on-chain; una factura `lnbc` solo sirve por Lightning.
- **Mínimos, máximos y comisiones:** Kraken los muestra antes de confirmar y pueden cambiar. Lightning está pensado para importes pequeños y medianos.

## Paso 5: Deposita BTC por Lightning

También puedes hacer el camino contrario y enviar sats desde tu wallet Lightning a Kraken:

1. En Kraken, pulsa **Depositar** y elige **Bitcoin (BTC)**.
2. Abre la pestaña **Lightning Network**.
3. Indica el importe y pulsa **Generar solicitud de depósito**.
4. Kraken crea una factura: cópiala o escanea el QR con tu wallet Lightning y págala.

El depósito llega en segundos, sin esperar las confirmaciones de bloque de un depósito on-chain. La factura también caduca, así que págala poco después de generarla.

Es útil, por ejemplo, para mover a Kraken sats que has recibido como pago o como remesa, algo muy habitual entre España y Latinoamérica o dentro de Latinoamérica.

## Y tus ahorros: on-chain a una wallet de hardware

Lightning es la cartera del día a día; la caja fuerte es otra. Si vas a guardar bitcoin a medio o largo plazo, retíralo **on-chain** (red Bitcoin, dirección `bc1…`) a una wallet de hardware como [Trezor](https://affil.trezor.io/SH13Y) o [Keystone](https://keyst.one/?rfsn=6408359.378bf2&utm_source=refersion&utm_medium=affiliate&utm_campaign=6408359.378bf2). Te contamos cómo elegir en [mejores wallets de Bitcoin](/2026/04/13/Mejores-Wallets-de-Bitcoin-en-2026-Guia-para-Principiantes/).

Haz siempre un envío de prueba con una cantidad pequeña antes de mover el resto.

> ⚠️ **Cuidado con las estafas.** Lightning no tiene token propio: si alguien te ofrece un «token de Lightning», es una estafa. Desconfía también de cualquier persona o web que te pida tu frase de recuperación o que te escriba por mensaje privado haciéndose pasar por el soporte de Kraken.

## Conclusión

Con Kraken, mover bitcoin por Lightning es cuestión de segundos: para retirar, eliges la red Lightning y pegas una factura de tu wallet; para depositar, generas la factura en Kraken y la pagas. Usa Lightning para el gasto y las cantidades pequeñas, y on-chain a una wallet de hardware para tus ahorros, estés en España, Europa o Latinoamérica.

¿Listo para probarlo? Puedes abrir tu cuenta en [Kraken usando este enlace](https://invite.kraken.com/JDNW/nmlddl67) y seguir los pasos de arriba.

---

*Aviso de afiliado: este artículo contiene enlaces de afiliado a Kraken, Trezor y Keystone. Si usas estos enlaces, recibimos una pequeña comisión sin coste adicional para ti. Solo recomendamos servicios que consideramos de calidad.*

*Este contenido es meramente informativo y no constituye asesoramiento financiero. Invertir en criptomonedas conlleva riesgos.*
