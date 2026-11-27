---
layout: post
title: "Chainlink vs Pyth Network: dos formas de ser oráculo"
date: 2026-11-25 06:00:00 +0100
categories: comparativa
tags: [chainlink, link, pyth, pyth-network, oraculos, defi, comparativa, criptomonedas]
author: Yukio Mizuta
description: "Chainlink vs Pyth: nodos frente a datos de primera mano, push y pull, CCIP, Pyth Pro de pago, LINK y PYTH con recompras. Cuál encaja en cada caso."
image: /assets/images/chainlink-vs-pyth-network.webp
faq:
  - question: "¿Cuál es la principal diferencia entre Chainlink y Pyth Network?"
    answer: "De dónde salen los datos. Chainlink usa una red de operadores de nodo independientes que consultan varias fuentes y agregan los resultados. Pyth recibe los precios directamente de quienes los generan: exchanges, market makers y firmas de trading que publican sus propios precios."
  - question: "¿Chainlink es push y Pyth es pull?"
    answer: "Es una simplificación que ya no es exacta. Chainlink tiene Data Feeds (push: publica los precios en la blockchain cada cierto tiempo) y Data Streams (pull: la aplicación trae el precio cuando lo necesita). Pyth funciona con el modelo pull."
  - question: "¿Pyth Network sigue siendo gratis?"
    answer: "No. Desde el verano de 2026, las aplicaciones necesitan una suscripción a Pyth Pro para leer sus precios. En septiembre de 2026 Pyth cerró Pythnet, su antigua cadena, y ahora funciona sobre su nueva infraestructura, Lazer."
  - question: "¿Qué tienen en común los tokens LINK y PYTH?"
    answer: "Los dos tienen staking con penalizaciones (slashing) para castigar el mal servicio y los dos tienen recompras con ingresos: la Chainlink Reserve compra LINK desde agosto de 2025 y la Reserva PYTH recompra PYTH cada mes. La diferencia es que el staking de LINK da recompensas y el de PYTH ya no."
  - question: "¿Dónde se pueden comprar LINK y PYTH desde España o Latinoamérica?"
    answer: "Los dos están disponibles en Kraken, que permite depositar euros por SEPA desde España y Europa y ofrece otros métodos en Latinoamérica (según el país). LINK es un token ERC-20 de Ethereum y PYTH es un token de Solana, así que cada uno se guarda en una wallet compatible con su red."
---

Las aplicaciones DeFi viven de precios que vienen de fuera de la blockchain, y quien se los lleva es un **oráculo**. Ya te explicamos [qué es Chainlink](/2026/06/01/que-es-chainlink/), el oráculo dominante, y [qué es Pyth Network](/2026/11/23/que-es-pyth-network-pyth/), su gran rival. Hoy los ponemos cara a cara con su situación actual, porque los dos han cambiado mucho en 2026, para que entiendas en qué se diferencian y cuándo encaja cada uno, estés en España, Europa o Latinoamérica.

<!--more-->

> **Aviso de afiliado:** Este artículo contiene enlaces de afiliado a Kraken, Trezor y Keystone. Si abres una cuenta o compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener el blog. Gracias por tu apoyo. 🙏

## Dos orígenes distintos

**Chainlink** se presentó en **2017** de la mano de Sergey Nazarov y Steve Ellis, y su red principal arrancó en **2019** en Ethereum. Nació para resolver el «problema del oráculo» con una red descentralizada de nodos, y con los años se ha convertido en infraestructura para bancos y mercados tradicionales.

**Pyth Network** se presentó en **2021** dentro del ecosistema de [Solana](/2026/04/27/Que-es-Solana/), impulsado por grandes firmas de trading. Su idea era que publicaran los precios quienes los crean. El token PYTH llegó en noviembre de 2023.

## Chainlink vs Pyth Network: comparativa directa

| Característica | Chainlink (LINK) | Pyth Network (PYTH) |
| --- | --- | --- |
| **Lanzamiento** | 2017 (red principal en 2019) | 2021 |
| **Origen de los datos** | Operadores de nodo que agregan varias fuentes | Publishers de primera mano (exchanges, *market makers*, firmas de trading) |
| **Entrega** | Push (Data Feeds) y pull (Data Streams) | Pull |
| **Servicios extra** | CCIP 2.0, CRE, VRF, Proof of Reserve, SVR | Data Marketplace, índices propios |
| **Acceso** | De pago (on-chain y contratos con empresas) | De pago: suscripción a Pyth Pro desde 2026 |
| **Token** | LINK (ERC-20 en Ethereum) | PYTH (token de Solana) |
| **Staking** | Sí, con recompensas y slashing | Sí, sin recompensas y con slashing |
| **Recompras con ingresos** | Chainlink Reserve (desde agosto de 2025) | Reserva PYTH (mensual) |
| **Clientes clave** | DeFi + instituciones (Swift, DTCC, Coinbase) | DeFi (sobre todo derivados) + datos institucionales |

## De dónde salen los datos

Es la diferencia de fondo.

**Chainlink** funciona con **operadores de nodo** independientes. Cada uno consulta varias fuentes de datos (agregadores, exchanges, proveedores profesionales), y la red combina sus respuestas y descarta las atípicas. Ningún nodo ni ninguna fuente decide el precio por sí solo.

**Pyth** se salta ese paso intermedio. Los datos los envían los **publishers**: exchanges, *market makers* y firmas de trading que publican **sus propios precios**, los mismos con los que operan. Pyth los combina y añade un **intervalo de confianza** que indica cuánto discrepan entre sí.

¿Qué implica esto?

- En **Chainlink**, la seguridad viene de la **redundancia**: muchos nodos y muchas fuentes.
- En **Pyth**, viene de la **calidad de la fuente**: datos de quienes mueven el mercado, con menos intermediarios. A cambio, depende más de que esos publishers sean honestos y estén disponibles.

## Push y pull: sin simplificar

Durante años se resumió así: «Chainlink es push, Pyth es pull». Hoy ya no es exacto.

- **Modelo push:** el oráculo escribe el precio en la blockchain cada cierto tiempo o cuando se mueve lo suficiente, lo necesite alguien o no.
- **Modelo pull:** el precio se actualiza fuera de la cadena y la aplicación lo **trae** a la blockchain, verificado, justo cuando lo necesita.

**Chainlink ofrece los dos:**

- **Data Feeds (push):** el sistema clásico que usan protocolos de préstamos como [Aave](/2026/10/12/que-es-aave/).
- **Data Streams (pull):** baja latencia para exchanges descentralizados y derivados. En 2026 se amplió a acciones y ETF de EE. UU. y a precios de fin de semana para activos tokenizados.

**Pyth es pull** y fue quien popularizó este modelo. Su nueva infraestructura, **Lazer**, permite elegir la frecuencia de actualización, desde tiempo real hasta intervalos de milisegundos.

En la práctica, los dos ofrecen hoy precios muy rápidos para derivados. Pyth nació especializado en eso; Chainlink llegó después, pero conserva el modelo push que tantos protocolos ya usan.

## Más allá de los precios

Aquí los caminos se separan.

**Chainlink** se ha convertido en una plataforma con muchos servicios:

- **CCIP 2.0:** el protocolo para mover datos y tokens entre blockchains. La versión 2.0, de **septiembre de 2026**, añade verificadores y controles de cumplimiento pensados para instituciones, y conecta con el ledger de **Swift**.
- **Chainlink Runtime Environment (CRE):** desde noviembre de 2025, coordina todos los servicios en flujos completos.
- **VRF:** números aleatorios verificables para juegos, sorteos y NFT.
- **Proof of Reserve:** comprueba que un activo tokenizado o una stablecoin está respaldado.
- **SVR:** permite a los protocolos de préstamos recuperar parte del valor (MEV) que generan sus liquidaciones.

**Pyth** se concentra en los datos de mercado:

- **Data Marketplace:** distribuye datos institucionales de bolsas como la de Nueva York (NYSE) o Nasdaq.
- **Índices propios**, por ejemplo de futuros de materias primas.
- Precios de **criptomonedas, acciones, divisas y materias primas**, en más de 100 blockchains.

Si lo comparamos con lo que vimos en [Aave vs Uniswap](/2026/10/14/aave-vs-uniswap/), Chainlink se parece cada vez más a una «caja de herramientas» completa y Pyth a un especialista: hace menos cosas, pero muy centrado en precios.

## Modelo de negocio y acceso

**Pyth ya no es gratis.** Durante años, cualquier desarrollador podía leer sus precios sin pagar. Desde el **verano de 2026**, las aplicaciones necesitan una suscripción a **Pyth Pro**. El antiguo servicio gratuito, Pyth Core, se integró en el modelo de pago, y en **septiembre de 2026** Pyth cerró **Pythnet**, la cadena propia con la que funcionaba desde 2021. Hoy todo corre sobre Lazer.

**Chainlink cobra por partida doble:** a las aplicaciones on-chain que usan sus servicios y a **empresas** fuera de la blockchain. Esa segunda parte pesa cada vez más: Swift, el DTCC (la gran cámara de compensación de EE. UU.) o Coinbase, que lo eligió para llevar acciones tokenizadas a DeFi.

Resumiendo: los dos son hoy **negocios de datos de pago**. Chainlink apunta sobre todo a bancos e instituciones; Pyth, a DeFi y a los mercados financieros que quieren datos de primera mano.

## LINK frente a PYTH

**LINK** (token ERC-20 de Ethereum):

- **Pago a los operadores de nodo** por sus servicios.
- **Staking v0.2:** un fondo con un límite de **45 millones de LINK**, recompensas variables y un periodo de espera de **28 días** para retirarlos. Si un operador de nodo no cumple, parte de su LINK bloqueado se **recorta** (*slashing*).
- **Chainlink Reserve:** desde **agosto de 2025**, Chainlink usa parte de sus ingresos, on-chain y de empresas, para **comprar LINK y guardarlo** en una reserva.

**PYTH** (token de Solana):

- **Gobernanza:** quien hace staking vota las propuestas de la DAO de Pyth, que deciden cosas como el cierre de Pythnet o el paso a suscripciones.
- **Staking de integridad:** los publishers y quienes delegan en ellos bloquean PYTH como garantía. Desde 2026 **ya no da recompensas**, pero el **slashing sigue activo**.
- **Reserva PYTH:** cada mes, la DAO **recompra PYTH** en el mercado con los ingresos de suscripciones y datos.

Lo interesante: **los dos tokens tienen ahora recompras financiadas con ingresos reales**. Es un cambio importante respecto a años anteriores, cuando dependían sobre todo de emisiones y promesas. Eso sí, ninguna recompra garantiza que el precio no caiga.

## Riesgos de cada uno

**Chainlink:**

- **Concentración de nodos:** muchos servicios dependen de un número limitado de operadores conocidos.
- **Complejidad:** CCIP, CRE y el resto de servicios añaden piezas técnicas que pueden fallar.
- **Dependencia de grandes clientes:** cada vez más ingresos vienen de bancos e instituciones, y sus decisiones (y la regulación financiera) pesan sobre el proyecto.

**Pyth:**

- **Dependencia de los publishers:** si varias firmas fallan o envían datos erróneos a la vez, la agregación puede no bastar.
- **Fallos de infraestructura:** en **mayo de 2026**, Pythnet sufrió una caída de varias horas que afectó a protocolos DeFi. La nueva infraestructura, Lazer, siguió funcionando, y es la que se usa hoy.
- **Cambio de modelo:** pasar a suscripciones puede empujar a proyectos pequeños hacia otros oráculos.
- **Historial de puentes:** su arquitectura anterior distribuía precios mediante Wormhole, un tipo de infraestructura que históricamente ha sufrido hackeos.

**En ambos:** la competencia (hay más oráculos), una regulación en plena evolución en Europa (MiCA) y Latinoamérica y una volatilidad alta de LINK y PYTH.

> ⚠️ *Este post es únicamente educativo y no constituye asesoramiento financiero. Siempre haz tu propia investigación antes de invertir.*

## ¿Cuándo encaja cada uno?

**Chainlink encaja si:**

- Te interesa la infraestructura que conecta blockchain con bancos y mercados tradicionales
- Valoras la redundancia de muchos nodos y fuentes
- Quieres un token con staking que todavía da recompensas
- Prefieres el proyecto más grande y asentado del sector

**Pyth encaja si:**

- Te atrae la idea de datos de primera mano, de quienes crean los precios
- Te interesa sobre todo DeFi de derivados y el ecosistema de Solana
- Valoras un modelo más simple, centrado solo en datos de mercado
- Aceptas un proyecto en plena transición, con un modelo de negocio recién estrenado

## Cómo comprar y guardar LINK y PYTH

Los dos están disponibles en [Kraken](https://invite.kraken.com/JDNW/nmlddl67), donde puedes depositar euros por SEPA desde España y Europa, o usar otros métodos desde Latinoamérica (según el país). Te lo explicamos paso a paso en nuestras guías para [comprar LINK en Kraken](/2026/11/27/como-comprar-link-en-kraken/) y [comprar PYTH en Kraken](/2026/11/27/como-comprar-pyth-en-kraken/).

Ojo con las redes al retirarlos:

- **LINK** es un token **ERC-20**: va a direcciones de Ethereum (`0x…`) y necesitas algo de ETH para las comisiones.
- **PYTH** es un token de **Solana**: va a direcciones de Solana y necesitas algo de SOL.

Para guardarlos a largo plazo, [Trezor](https://affil.trezor.io/SH13Y) y [Keystone](https://keyst.one/?rfsn=6408359.378bf2&utm_source=refersion&utm_medium=affiliate&utm_campaign=6408359.378bf2) admiten tanto Ethereum como Solana y sus tokens. Las bases de la autocustodia te las contamos en [mejores wallets de Bitcoin](/2026/04/13/Mejores-Wallets-de-Bitcoin-en-2026-Guia-para-Principiantes/).

## Conclusión

Chainlink y Pyth resuelven el mismo problema con filosofías distintas. **Chainlink** apuesta por una red de nodos redundante y por convertirse en la infraestructura de datos e interoperabilidad de las finanzas tradicionales. **Pyth** apuesta por los datos de primera mano, servidos en modelo pull, y en 2026 ha pasado de servicio gratuito a negocio de datos por suscripción.

No hace falta elegir un ganador: muchos protocolos usan los dos. Lo importante es entender de dónde sale cada precio, porque de él dependen miles de millones en DeFi.

---

*Aviso de afiliado: este artículo contiene enlaces de afiliado a Kraken, Trezor y Keystone. Si usas estos enlaces, recibimos una pequeña comisión sin coste adicional para ti. Solo recomendamos servicios que consideramos de calidad.*

*Este contenido es meramente informativo y no constituye asesoramiento financiero. Invertir en criptomonedas conlleva riesgos.*
