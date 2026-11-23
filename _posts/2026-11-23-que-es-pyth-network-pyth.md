---
layout: post
title: "¿Qué es Pyth Network (PYTH)? El oráculo de primera mano"
date: 2026-11-23 06:00:00 +0100
categories: Educación
tags: [pyth, pyth-network, oraculos, defi, solana, criptomonedas]
author: Yukio Mizuta
image: /assets/images/que-es-pyth-network-pyth.webp
description: "Qué es Pyth Network (PYTH): el oráculo que toma precios directamente de exchanges y firmas de trading. Modelo pull, Pyth Pro, el token PYTH y sus riesgos."
---

Un contrato inteligente no puede saber por sí solo a cuánto cotiza el euro, una acción o Bitcoin: necesita que alguien le lleve ese dato desde fuera. Ese «alguien» es un **oráculo**, y ya te explicamos a fondo el problema que resuelven en [¿Qué es Chainlink?](/2026/06/01/que-es-chainlink/). Hoy toca su gran rival: **Pyth Network**, el oráculo que no busca los precios en internet, sino que los recibe directamente de quienes los crean. Te contamos qué es, cómo funciona y qué riesgos tiene, estés en España, Europa o Latinoamérica.

<!--more-->

> **Aviso de afiliado:** Este artículo contiene enlaces de afiliado a Trezor y Keystone. Si compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener el blog. Gracias por tu apoyo. 🙏

## El problema del oráculo, en un párrafo

Las blockchains solo conocen lo que pasa dentro de su red. Para prestar, liquidar posiciones o pagar un derivado, las aplicaciones DeFi necesitan precios del mundo exterior, y si ese precio llega mal (o manipulado), el contrato se ejecuta mal. Un oráculo fiable es, por tanto, una pieza crítica: de él dependen miles de millones en protocolos como [Aave](/2026/10/12/que-es-aave/). Chainlink lo resolvió con una red de nodos que consultan varias fuentes y las agregan. Pyth tomó otro camino.

## El origen de Pyth Network

Pyth se presentó en **abril de 2021** y nació dentro del ecosistema de [Solana](/2026/04/27/Que-es-Solana/), impulsado por grandes firmas de trading. Su idea era sencilla: si los precios más precisos los generan los exchanges y los *market makers*, ¿por qué no hacer que sean ellos quienes los publiquen directamente en la blockchain?

Durante sus primeros años, Pyth funcionó gratis para cualquier desarrollador y se extendió de Solana a **más de 100 blockchains**. El token **PYTH** llegó en **noviembre de 2023**, con un airdrop a usuarios de decenas de cadenas.

## ¿Cómo funciona Pyth?

### Datos de primera mano

Esta es la gran diferencia con Chainlink. En Pyth, los datos los aportan los llamados **publishers**: exchanges, *market makers* y firmas de trading (entre ellos nombres como Jane Street, Cboe u OKX) que envían **sus propios precios**, los mismos con los que operan.

Pyth combina las aportaciones de todos ellos en un precio agregado y añade algo poco habitual: un **intervalo de confianza**, que indica cuánto discrepan las fuentes. Si el mercado está tranquilo, el intervalo es estrecho; si hay caos, se amplía, y la aplicación puede reaccionar (por ejemplo, pausando liquidaciones).

### Modelo pull frente a modelo push

Los oráculos clásicos usan un modelo **push**: actualizan el precio en la blockchain cada cierto tiempo o cuando se mueve lo suficiente, lo necesite alguien o no.

Pyth popularizó el modelo **pull**: el precio se actualiza fuera de la cadena muchas veces por segundo, y es la aplicación la que lo **«trae»** a la blockchain justo cuando lo necesita, dentro de su propia transacción. Ventajas:

- **Precios más frescos** en el momento exacto en que se usan.
- **Menos coste** para la red: no se escriben actualizaciones que nadie lee.
- **Más fácil llegar a muchas cadenas** sin mantener actualizaciones constantes en cada una.

### De Pythnet a Pyth Pro: el cambio de 2026

Hasta ahora, los precios se agregaban en **Pythnet**, una cadena propia basada en la tecnología de Solana, y se distribuían a otras redes mediante el puente **Wormhole**. En 2026 la DAO de Pyth aprobó un cambio de modelo importante:

- **Nueva infraestructura (Lazer):** más rápida, con actualizaciones que van desde tiempo real hasta intervalos de milisegundos. Pythnet se está retirando.
- **Fin del acceso gratuito:** desde agosto de 2026, las aplicaciones necesitan un **plan de suscripción** (Pyth Pro) para leer los precios. El antiguo servicio gratuito, Pyth Core, se integró en el modelo de pago.
- **Data Marketplace:** un mercado de datos institucionales donde Pyth distribuye información de bolsas como la de Nueva York o Nasdaq.

En otras palabras: Pyth ha pasado de ser un servicio público gratuito a funcionar como un **negocio de datos por suscripción**, y lo que gana se conecta con su token.

### Qué datos ofrece

Pyth no se limita a las criptomonedas. Publica precios de:

- **Criptomonedas** (miles de pares).
- **Acciones** e índices, incluidos horarios extendidos.
- **Divisas** (euro, dólar, peso mexicano y muchas más).
- **Materias primas** como el oro, el petróleo o el café.

## Para qué sirve el token PYTH

PYTH es un token de la red Solana con un suministro máximo de **10.000 millones**. Sus funciones principales:

- **Gobernanza:** quien hace staking de PYTH vota las propuestas de la DAO (las llamadas PIPs), que deciden comisiones, nuevas cadenas o cambios como el de 2026.
- **Staking de integridad (Oracle Integrity Staking):** los publishers y quienes delegan en ellos bloquean PYTH como garantía de que los datos son correctos. Si un publisher envía datos erróneos, parte de lo bloqueado puede ser **recortado** (*slashing*). Las recompensas de este programa se han ido eliminando en 2026, pero el staking y las penalizaciones siguen activos.
- **Reserva PYTH:** cada mes, la DAO usa parte de los ingresos por suscripciones y datos para **recomprar PYTH en el mercado**. Es lo que liga el negocio de Pyth con su token.

## Casos de uso

- **Préstamos DeFi:** saber cuánto vale el colateral para decidir cuándo liquidar una posición.
- **Derivados y perpetuos:** los exchanges descentralizados de futuros necesitan precios muy rápidos, y ahí Pyth es especialmente fuerte.
- **Activos del mundo real tokenizados:** acciones, materias primas o divisas operables en blockchain, las 24 horas.
- **Stablecoins y pagos:** tipos de cambio fiables, algo muy útil en Latinoamérica, donde el valor del dólar frente a la moneda local importa a diario.

## Cómo guardar PYTH de forma segura

El viernes te enseñamos paso a paso cómo comprar PYTH en Kraken. Mientras tanto, un apunte: PYTH es un **token de Solana**, así que se guarda en wallets compatibles con Solana (direcciones de Solana, no las `0x` de Ethereum) y necesitarás un poco de SOL para pagar las comisiones.

Para cantidades a largo plazo, lo más seguro es una wallet de hardware. Tanto [Trezor](https://affil.trezor.io/SH13Y) como [Keystone](https://keyst.one/?rfsn=6408359.378bf2&utm_source=refersion&utm_medium=affiliate&utm_campaign=6408359.378bf2) admiten Solana y sus tokens. Las bases de la autocustodia te las explicamos en [mejores wallets de Bitcoin](/2026/04/13/Mejores-Wallets-de-Bitcoin-en-2026-Guia-para-Principiantes/).

## Riesgos a considerar

- **Dependencia de los publishers:** Pyth confía en que las firmas que aportan datos sean honestas y estén disponibles. La agregación y el slashing reducen el riesgo, pero no lo eliminan.
- **Fallos de infraestructura:** en mayo de 2026, el antiguo servicio gratuito sufrió una caída de varias horas que afectó a algunos protocolos DeFi. Cuando un oráculo falla, todo lo que depende de él se resiente.
- **Cambio de modelo:** el paso a suscripciones de pago puede empujar a algunos proyectos pequeños hacia otros oráculos. Que el nuevo modelo funcione a largo plazo está por ver.
- **Competencia:** Chainlink sigue siendo el oráculo dominante y hay otros rivales. Ninguna posición está garantizada.
- **Puentes y arquitectura:** la distribución entre cadenas ha dependido de puentes como Wormhole, un tipo de infraestructura que históricamente ha sufrido hackeos importantes.
- **Regulación:** un token ligado a ingresos y recompras puede recibir más atención de los reguladores, tanto en Europa (MiCA) como en Latinoamérica.
- **Volatilidad y desbloqueos:** gran parte del suministro se ha ido liberando por fases desde 2023, y PYTH puede subir y bajar con mucha fuerza.

> ⚠️ *Este post es únicamente educativo y no constituye asesoramiento financiero. Siempre haz tu propia investigación antes de invertir.*

## Conclusión

Pyth Network propone otra forma de llevar precios a la blockchain: **datos de primera mano**, de quienes realmente mueven el mercado, servidos con un **modelo pull** que los entrega justo cuando hacen falta. En 2026 ha dado además un giro de fondo, pasando de servicio gratuito a negocio de datos por suscripción, con el token PYTH conectado a esos ingresos.

¿Es mejor que Chainlink? Depende de para qué. El miércoles los ponemos cara a cara en **Chainlink vs Pyth Network**.

---

*Aviso de afiliado: este artículo contiene enlaces de afiliado a Trezor y Keystone. Si usas estos enlaces, recibimos una pequeña comisión sin coste adicional para ti. Solo recomendamos servicios que consideramos de calidad.*

*Este contenido es meramente informativo y no constituye asesoramiento financiero. Invertir en criptomonedas conlleva riesgos.*
