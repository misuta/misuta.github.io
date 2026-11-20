---
layout: post
title: "¿Qué es Zcash (ZEC)?"
date: 2026-11-16 06:00:00 +0100
categories: Educación
tags: [zcash, zec, privacidad, zk-snarks, monedas-de-privacidad, criptomonedas]
author: Yukio Mizuta
image: /assets/images/que-es-zcash-zec.webp
description: "Qué es Zcash (ZEC): la moneda de privacidad opcional basada en zk-SNARKs. Direcciones transparentes y blindadas, viewing keys, la actualización NU7 y sus riesgos."
---

En Bitcoin todo es público: cualquiera puede ver cuánto hay en una dirección, de dónde vino y a dónde fue. Es una garantía de transparencia, pero también un problema de privacidad. Zcash nació para ofrecer lo mismo que Bitcoin (un suministro fijo de 21 millones y minería), con una diferencia clave: puedes enviar dinero **sin revelar quién envía, quién recibe ni cuánto**. Si te falta la base, empieza por [Bitcoin: qué es y cómo funciona](/2026/04/20/bitcoin-que-es-y-como-funciona/); aquí te explicamos qué es Zcash, cómo funciona y qué riesgos tiene, estés en España, Europa o Latinoamérica.

<!--more-->

> **Aviso de afiliado:** Este artículo contiene enlaces de afiliado a Keystone y Trezor. Si compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener el blog. Gracias por tu apoyo. 🙏

## El origen de Zcash

Zcash tiene raíces académicas. En 2014, un grupo de criptógrafos de universidades como Johns Hopkins, el MIT, Tel Aviv y el Technion publicó **Zerocash**, un protocolo para hacer pagos totalmente privados sobre una cadena de bloques usando un tipo de prueba criptográfica llamada **zk-SNARK**.

Sobre esa investigación, un equipo liderado por **Zooko Wilcox** lanzó Zcash el **28 de octubre de 2016**. Igual que [Litecoin](/2026/05/15/que-es-litecoin/), Zcash tomó muchas ideas de Bitcoin: prueba de trabajo, un máximo de **21 millones de ZEC** y *halvings* que reducen la emisión aproximadamente cada cuatro años.

Hoy el desarrollo lo reparten varias organizaciones independientes, entre ellas la **Zcash Foundation**, **ZODL** (el equipo que creó la wallet oficial) y **Shielded Labs**.

## ¿Cómo funciona Zcash?

### Pruebas de conocimiento cero (zk-SNARKs)

La idea central es la **prueba de conocimiento cero**: demostrar que algo es cierto sin revelar los datos que lo hacen cierto.

En Zcash, cuando envías una transacción privada, la red no ve ni el remitente, ni el destinatario, ni el importe. Lo que recibe es una prueba matemática de que **la transacción es válida**: que tienes esos fondos, que no los has gastado antes y que no se está creando ZEC de la nada. Los nodos verifican la prueba, no los datos.

### Direcciones transparentes y blindadas

Zcash no obliga a usar la privacidad: la hace **opcional**. Por eso tiene dos tipos de direcciones:

- **Transparentes (empiezan por `t1` o `t3`):** funcionan como en Bitcoin. Todo es visible en la cadena.
- **Blindadas (*shielded*):** los datos de la transacción quedan cifrados. Han pasado por varias generaciones o *pools*: **Sprout** (2016), **Sapling** (2018, empiezan por `zs`), **Orchard** (2022) e **Ironwood** (2026), el más reciente.

Para no tener que manejar varias direcciones, las wallets modernas usan **direcciones unificadas** (empiezan por `u1`). Una sola dirección agrupa varios tipos y la wallet del remitente elige automáticamente el más privado que admita.

Un dato importante: Orchard fue el primer pool que eliminó la llamada **configuración de confianza** (*trusted setup*), una ceremonia inicial que había que hacer bien para que el sistema fuera seguro. Desde Orchard, ese requisito desaparece.

### Viewing keys: privacidad sin opacidad

Una de las ideas más interesantes de Zcash son las **viewing keys** (claves de visualización). Te permiten dar a otra persona **acceso de solo lectura** a tus transacciones blindadas, sin que pueda mover tus fondos.

Sirven, por ejemplo, para enseñar tus movimientos a tu asesor fiscal, a un auditor o a un exchange que te lo pida. Es privacidad por defecto, pero con la opción de demostrar lo que haga falta.

## La actualización NU7 (noviembre de 2026)

El **6 de noviembre de 2026** se activó en la red principal **NU7**, una de las mayores actualizaciones de Zcash en años:

- **Bloques de 25 segundos:** el tiempo entre bloques pasa de 75 a 25 segundos, así que las confirmaciones son unas tres veces más rápidas. La recompensa por bloque se reduce en la misma proporción, de modo que la emisión de ZEC, los *halvings* y el máximo de 21 millones **no cambian**.
- **Network Sustainability Mechanism (NSM):** el 60 % de las comisiones de cada bloque se retira de la circulación y se guarda en una reserva pública, que empezará a devolverse a los mineros como recompensa hacia 2031. La idea es mantener la seguridad de la red cuando la emisión siga bajando, el mismo reto que tiene Bitcoin a largo plazo.
- **Fin de las transacciones v4 y de Sprout:** NU7 deja de aceptar el formato antiguo de transacción, el único que podía mover fondos del pool Sprout. Los ZEC que seguían ahí (unos 12.000) ya no se pueden gastar.

**¿Tienes que hacer algo?** Si tus ZEC están en un exchange, en una dirección transparente o en una wallet moderna actualizada, no. Lo único recomendable es **mantener tu wallet al día**: si tenías fondos en Orchard, las wallets actuales ofrecen migrarlos a Ironwood sin cambiar de dirección.

## Para qué sirve el token ZEC

- **Medio de pago:** enviar dinero de forma privada, en segundos y con comisiones bajas.
- **Reserva de valor:** con suministro limitado a 21 millones, como Bitcoin.
- **Recompensa a los mineros:** ZEC se emite como recompensa por asegurar la red con prueba de trabajo (algoritmo Equihash).
- **Comisiones:** cada transacción paga una pequeña comisión en ZEC.

## Casos de uso

- **Privacidad financiera cotidiana:** que tu sueldo, tus ahorros o tus compras no sean visibles para cualquiera que conozca tu dirección.
- **Pagos a proveedores o empleados:** sin exponer a la competencia cuánto pagas y a quién.
- **Donaciones:** a periodistas, activistas u organizaciones sin dejar un rastro público de quién dona.
- **Protección frente a la vigilancia y el robo:** en países con inestabilidad o inseguridad, en Latinoamérica y en otras regiones, mostrar públicamente cuánto dinero tienes puede ser un riesgo real.
- **Cumplimiento cuando hace falta:** gracias a las viewing keys, puedes demostrar tus movimientos a Hacienda o al SAT sin hacerlos públicos para todo el mundo.

## Cómo guardar ZEC de forma segura

Si todavía no tienes ZEC, te explicamos [cómo comprar ZEC en Kraken](/2026/11/20/como-comprar-zec-en-kraken/) paso a paso, incluido cómo blindarlo al retirarlo a tu wallet.

Para aprovechar la privacidad de Zcash necesitas una wallet que admita **direcciones blindadas**; muchas wallets multimoneda solo admiten las transparentes.

Si quieres guardar ZEC a largo plazo, lo más seguro es una wallet de hardware. [Keystone](https://keyst.one/?rfsn=6408359.378bf2&utm_source=refersion&utm_medium=affiliate&utm_campaign=6408359.378bf2) admite ZEC transparente con su firmware multimoneda y **ZEC blindado** con su firmware Cypherpunk, conectándola a la wallet móvil oficial de Zcash. [Trezor](https://affil.trezor.io/SH13Y), por ahora, solo admite **direcciones transparentes**. Las bases de la autocustodia te las explicamos en [mejores wallets de Bitcoin](/2026/04/13/Mejores-Wallets-de-Bitcoin-en-2026-Guia-para-Principiantes/).

## Riesgos a considerar

- **Regulación de las monedas de privacidad:** es el gran riesgo de Zcash. Algunos exchanges han dejado de ofrecer monedas de privacidad en ciertos países, y el nuevo reglamento antiblanqueo de la Unión Europea prohibirá a los proveedores de criptoactivos operar con criptoactivos que ocultan al usuario a partir de 2027. Cómo afectará a Zcash, con su privacidad opcional y sus viewing keys, aún no está claro. En Latinoamérica la situación varía mucho de un país a otro.
- **Disponibilidad limitada en exchanges:** que puedas comprarlo hoy en tu país no garantiza que mañana siga siendo así.
- **Complejidad técnica:** varios tipos de direcciones, pools y migraciones. Un error, como dejar fondos en un pool antiguo, puede salir caro (lo hemos visto con Sprout).
- **Privacidad mal usada:** enviar desde una dirección transparente o mover fondos entre transparente y blindado de forma predecible reduce mucho tu privacidad.
- **Riesgo criptográfico:** Zcash depende de criptografía avanzada. En 2026 se encontró y corrigió una vulnerabilidad en Orchard antes de que nadie la explotara, pero demuestra que el riesgo existe.
- **Volatilidad:** como cualquier criptomoneda, ZEC puede subir y bajar con mucha fuerza.

> ⚠️ *Este post es únicamente educativo y no constituye asesoramiento financiero. Siempre haz tu propia investigación antes de invertir.*

## Conclusión

Zcash toma la base monetaria de Bitcoin (21 millones, prueba de trabajo, halvings) y le añade algo que Bitcoin no tiene: **privacidad real a nivel de protocolo**, opcional y verificable con viewing keys. Con NU7 es además más rápida que nunca.

Su gran incógnita no es técnica sino regulatoria. Si te interesa la privacidad financiera, merece la pena entenderla bien antes de comprar. La comparamos con su gran rival en [Zcash vs Monero](/2026/11/18/zcash-vs-monero/), y te enseñamos a [comprar ZEC paso a paso en Kraken](/2026/11/20/como-comprar-zec-en-kraken/).

---

*Aviso de afiliado: este artículo contiene enlaces de afiliado a Keystone y Trezor. Si usas estos enlaces, recibimos una pequeña comisión sin coste adicional para ti. Solo recomendamos servicios que consideramos de calidad.*

*Este contenido es meramente informativo y no constituye asesoramiento financiero. Invertir en criptomonedas conlleva riesgos.*
