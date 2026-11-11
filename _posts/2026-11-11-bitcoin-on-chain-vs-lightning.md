---
layout: post
title: "Bitcoin on-chain vs Lightning: cuándo usar cada uno"
date: 2026-11-11 06:00:00 +0100
categories: comparativa
tags: [bitcoin, btc, lightning, on-chain, capa-2, pagos, wallets, comparativa, criptomonedas]
author: Yukio Mizuta
description: "On-chain o Lightning: velocidad, comisiones, privacidad, custodia y qué dirección usar. Cuándo encaja cada forma de mover bitcoin, con una regla práctica."
image: /assets/images/bitcoin-on-chain-vs-lightning.webp
faq:
  - question: "¿Qué diferencia hay entre una transacción on-chain y un pago por Lightning?"
    answer: "Una transacción on-chain se registra en la cadena de Bitcoin y espera a que un minero la incluya en un bloque. Un pago por Lightning viaja por canales de pago fuera de la cadena y se liquida en segundos. En los dos casos lo que se mueve es el mismo bitcoin (BTC)."
  - question: "¿Puedo enviar bitcoin de Lightning a una dirección on-chain?"
    answer: "No directamente: una dirección on-chain (bc1, 1 o 3) solo recibe transacciones en la cadena, y una factura Lightning (lnbc) o una Lightning address solo reciben pagos por Lightning. Algunas wallets y servicios hacen el cambio entre las dos redes (los llamados swaps), pero tienes que elegir la red correcta al enviar."
  - question: "¿Es Lightning menos seguro que on-chain?"
    answer: "Los fondos en Lightning siguen siendo bitcoin protegido por las reglas de Bitcoin, pero viven en una wallet conectada a internet y, si es custodial, los controla el proveedor. Para ahorros a largo plazo, lo más seguro es on-chain en una wallet de hardware como Trezor o Keystone."
  - question: "¿Cuántas confirmaciones necesita una transacción on-chain?"
    answer: "Depende del importe y de quién recibe. Para pagos pequeños suele bastar con una o dos confirmaciones; para importes grandes, la convención habitual es esperar unas 6 confirmaciones, alrededor de una hora. Cada exchange fija su propio número para abonar los depósitos."
  - question: "¿Kraken permite depositar y retirar bitcoin por Lightning?"
    answer: "Sí. Kraken permite depositar y retirar BTC tanto por la cadena principal como por Lightning. Al retirar, eliges la red: Lightning para importes pequeños y rápidos, on-chain para llevar tus ahorros a una wallet de hardware."
---

Con bitcoin puedes mover el mismo dinero de dos formas: **on-chain**, registrando la transacción en la cadena principal, o por **Lightning Network**, la red de canales de pago construida encima. Ya te explicamos [Bitcoin: qué es y cómo funciona](/2026/04/20/bitcoin-que-es-y-como-funciona/) y [¿Qué es Lightning Network?](/2026/11/09/que-es-lightning-network/); aquí comparamos las dos vías y te contamos cuándo encaja cada una, estés en España, Europa o Latinoamérica.

<!--more-->

> **Aviso de afiliado:** Este artículo contiene enlaces de afiliado a Kraken, Trezor y Keystone. Si abres una cuenta o compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener el blog. Gracias por tu apoyo. 🙏

## Mismo bitcoin, dos caminos

Lo primero que conviene tener claro: **no son dos monedas distintas**. Lightning no tiene token propio. Lo que envías por la cadena y lo que envías por Lightning es siempre BTC, contado a menudo en *satoshis* o *sats* (1 BTC = 100 millones de sats).

La diferencia está en **cómo viaja ese bitcoin**:

- **On-chain:** la transacción se difunde a la red, espera a que un minero la incluya en un bloque y queda registrada para siempre en la cadena de Bitcoin.
- **Lightning:** el pago viaja por canales de pago abiertos entre usuarios, saltando de canal en canal hasta el destinatario. Solo la apertura y el cierre de cada canal se escriben en la cadena.

## On-chain vs Lightning: comparativa directa

| Característica | On-chain | Lightning |
| --- | --- | --- |
| **Velocidad** | Un bloque cada ~10 minutos de media | Segundos |
| **Confirmaciones** | Sí (más confirmaciones, más seguridad) | No hace falta esperar bloques |
| **Comisiones** | Según el tamaño de la transacción y la saturación de la red | Mínimas, en sats |
| **Finalidad** | Prácticamente irreversible tras varias confirmaciones | Inmediata y definitiva al completarse el pago |
| **Para recibir** | Dirección `bc1…`, `1…` o `3…` | Factura `lnbc…` o Lightning address `usuario@dominio` |
| **Privacidad** | Todo queda en un registro público | Los pagos no se publican en la cadena |
| **Custodia ideal** | Wallet de hardware (Trezor, Keystone) | Wallet Lightning conectada a internet |
| **Importes** | Medianos y grandes, ahorros | Pequeños y medianos, gasto diario |
| **Uso típico** | Ahorrar, liquidar, mover grandes cantidades | Pagar, donar, enviar remesas |

## Velocidad y confirmaciones

En la cadena de Bitcoin se produce un bloque cada **unos 10 minutos de media**, aunque a veces tarda bastante más. Tu transacción no está confirmada hasta que entra en un bloque, y cada bloque nuevo que se añade encima suma una **confirmación** más.

Para un pago pequeño suele bastar con una o dos confirmaciones. Para importes grandes, la convención habitual es esperar **unas 6 confirmaciones**, alrededor de una hora. Los exchanges fijan su propio número antes de abonarte un depósito.

En **Lightning** no hay que esperar a ningún bloque: el pago llega en **segundos**. Por eso encaja con situaciones en las que esperar no es una opción, como pagar en una tienda o enviar una propina.

## Comisiones

En **on-chain**, la comisión **no depende de cuánto envías**, sino de cuánto espacio ocupa tu transacción en el bloque y de lo saturada que esté la red. Enviar una cantidad pequeña o una enorme puede costar lo mismo. Cuando hay mucha demanda, las comisiones suben y una transacción pequeña puede salir cara en proporción.

En **Lightning**, las comisiones son **mínimas**, normalmente unos pocos sats, y no dependen de la saturación de la cadena. El coste en la cadena aparece solo al **abrir o cerrar canales**, algo que en las wallets sencillas suele gestionarse por detrás.

Conclusión práctica: para importes pequeños, Lightning casi siempre sale mucho más barato; para importes grandes, la comisión on-chain pesa poco en proporción.

## Finalidad: ¿cuándo es definitivo un pago?

Una transacción on-chain se vuelve **prácticamente irreversible** a medida que acumula confirmaciones. Antes de la primera confirmación, todavía puede quedarse atascada si pagaste poca comisión.

Un pago por Lightning, en cambio, es **atómico**: va bloqueado con un secreto criptográfico y o llega completo al destinatario, o se cancela y el dinero vuelve a ti. Cuando se completa, es definitivo. No hay término medio ni pagos «a medias».

## Custodia: dónde guardar tu bitcoin

Aquí está la diferencia que más importa para tus ahorros.

**On-chain** es la forma natural de usar una **wallet de hardware**: tus claves nunca salen del dispositivo y puedes recibir bitcoin sin conectarlo. Es la opción más segura para guardar BTC a largo plazo, con una wallet como [Trezor](https://affil.trezor.io/SH13Y) o [Keystone](https://keyst.one/?rfsn=6408359.378bf2&utm_source=refersion&utm_medium=affiliate&utm_campaign=6408359.378bf2).

**Lightning** necesita una wallet **conectada a internet** que gestione los canales. Puede ser:

- **Custodial:** muy sencilla, pero el proveedor controla tus bitcoins.
- **No custodial:** tú controlas tus claves, pero es una wallet caliente, más expuesta que una de hardware.

De ahí la regla práctica: **ahorros on-chain en frío, gasto diario por Lightning**. Te contamos cómo elegir wallet en [mejores wallets de Bitcoin](/2026/04/13/Mejores-Wallets-de-Bitcoin-en-2026-Guia-para-Principiantes/).

## Privacidad

La cadena de Bitcoin es **pública**: cualquiera puede ver todas las transacciones, importes y direcciones. No aparece tu nombre, pero si una dirección se vincula contigo (por ejemplo, al retirar desde un exchange con verificación de identidad), se puede rastrear su historial. Por eso conviene **no reutilizar direcciones**; las wallets modernas generan una nueva para cada cobro.

En **Lightning**, los pagos **no se publican en la cadena**, lo que da más privacidad en el día a día. No es anonimato total: la apertura y el cierre de canales sí son públicos, y las wallets custodiales ven todos tus movimientos.

## ¿Qué usas para recibir?

Es el error más común al empezar: **cada red usa su propio formato** y no se pueden mezclar.

**On-chain**, recibes en una **dirección de Bitcoin**:

- `bc1…`: el formato actual (SegWit y Taproot), el más recomendable.
- `1…` y `3…`: formatos más antiguos, todavía válidos.

**En Lightning**, recibes con:

- **Una factura** (*invoice*): un texto largo que empieza por `lnbc` o un código QR. Lleva el importe, suele ser de un solo uso y caduca.
- **Una Lightning address:** una dirección con forma de email, como `usuario@dominio.com`, que puedes compartir y reutilizar.

Si pegas una factura `lnbc` en el campo de una retirada on-chain, o una dirección `bc1` donde se espera Lightning, la wallet o el exchange lo rechazará. Algunas wallets y servicios hacen el cambio entre redes (los llamados *swaps*), pero lo más sencillo es elegir bien la red desde el principio.

## Importes: ¿cuánto mover por cada vía?

- **Cantidades pequeñas** (un café, una propina, una suscripción): Lightning. On-chain, la comisión puede ser desproporcionada.
- **Cantidades medianas** (pagar un servicio, enviar dinero a la familia): Lightning suele funcionar bien; si un pago falla por falta de ruta con saldo suficiente, on-chain es la alternativa.
- **Cantidades grandes y ahorros**: on-chain, a una wallet de hardware. Lightning no está pensado para guardar mucho dinero en una wallet caliente.

## Casos de uso

**On-chain encaja para:**

- Guardar tus ahorros en una wallet de hardware
- Mover cantidades grandes entre tus propias wallets
- Liquidar compras importantes, donde esperar unas confirmaciones no es problema
- Abrir y cerrar canales de Lightning

**Lightning encaja para:**

- Pagos del día a día y micropagos
- Propinas y *zaps* en Nostr
- Remesas, muy útiles entre España y Latinoamérica o dentro de Latinoamérica: el dinero llega en segundos y con comisiones mínimas
- Mover pequeñas cantidades entre exchanges y wallets compatibles

## Riesgos de cada vía

**On-chain:**

- **Comisiones altas** en momentos de saturación, sobre todo para importes pequeños
- **Esperas:** una transacción con poca comisión puede tardar horas o quedarse atascada
- **Errores irreversibles:** si envías a una dirección equivocada, no hay forma de recuperarlo
- **Privacidad:** todo el historial queda a la vista en la cadena

**Lightning:**

- **Custodia:** en wallets custodiales no controlas tus fondos
- **Wallet caliente:** más expuesta que una de hardware
- **Rutas fallidas:** los pagos grandes pueden fallar por falta de liquidez
- **Vigilancia de canales:** en wallets no custodiales, tu wallet (o una *watchtower*) debe estar atenta por si la otra parte intenta cerrar un canal con un saldo antiguo

**En ambas:** la regulación sobre cripto varía según el país (España y la UE, Latinoamérica, EE. UU., Canadá) y sigue evolucionando.

> ⚠️ *Este post es únicamente educativo y no constituye asesoramiento financiero. Siempre haz tu propia investigación antes de invertir.*

## ¿Cuándo usar cada uno?

**Usa on-chain si:**

- Vas a guardar bitcoin a largo plazo
- Mueves una cantidad grande
- Quieres llevar tus BTC a una wallet de hardware

**Usa Lightning si:**

- Vas a pagar o enviar una cantidad pequeña o mediana
- Necesitas que el dinero llegue en segundos
- Quieres evitar comisiones altas cuando la cadena está saturada

No es una cosa o la otra: lo habitual es combinarlas. El grueso de tus bitcoins, on-chain en frío; un saldo pequeño en una wallet Lightning para el día a día, que recargas cuando haga falta.

## Kraken: las dos vías en un mismo exchange

[Kraken](https://invite.kraken.com/JDNW/nmlddl67) permite **depositar y retirar BTC tanto on-chain como por Lightning**. Al retirar, eliges la red: Lightning para llevar una cantidad pequeña a tu wallet de gasto en segundos, on-chain para enviar tus ahorros a tu Trezor o Keystone. Si aún no tienes bitcoin, te lo explicamos paso a paso en [Cómo comprar Bitcoin en Kraken](/2026/04/14/como-comprar-bitcoin-en-kraken/).

Puedes registrarte a través de nuestro [enlace de afiliado en Kraken](https://invite.kraken.com/JDNW/nmlddl67) sin coste adicional para ti, estés en España, Europa, Latinoamérica, EE. UU. o Canadá. Y este viernes publicamos una guía paso a paso para enviar y recibir bitcoin por Lightning en Kraken.

## Conclusión

On-chain y Lightning no compiten: se complementan. La cadena principal es la caja fuerte de Bitcoin, lenta pero con la máxima seguridad, ideal para ahorrar y mover grandes cantidades. Lightning es la cartera del día a día, rápida y barata, ideal para pagar y enviar.

Si quieres ver cómo se compara Lightning con otra forma de ampliar Bitcoin, te lo contamos en [Stacks vs Lightning Network](/2026/11/04/stacks-vs-lightning-network/).

---

*Aviso de afiliado: este artículo contiene enlaces de afiliado a Kraken, Trezor y Keystone. Si usas estos enlaces, recibimos una pequeña comisión sin coste adicional para ti. Solo recomendamos servicios que consideramos de calidad.*

*Este contenido es meramente informativo y no constituye asesoramiento financiero. Invertir en criptomonedas conlleva riesgos.*
