---
layout: post
title: "Sui vs Aptos: dos herederos de Diem, ¿en qué se diferencian de verdad?"
date: 2026-09-09 06:00:00 +0200
categories: comparativa
tags: [sui, aptos, apt, comparativa, blockchain, criptomonedas]
author: Yukio Mizuta
description: "Comparamos Sui y Aptos, dos blockchains de capa 1 nacidas del mismo equipo de ex ingenieros de Diem/Meta: modelo de objetos frente a Block-STM, y dos variantes distintas de Move."
image: /assets/images/sui-vs-aptos.webp
faq:
  - question: "¿Sui y Aptos usan el mismo lenguaje de programación?"
    answer: "Comparten origen pero no implementación. Ambas usan variantes de Move, el lenguaje orientado a recursos creado por el mismo equipo cuando trabajaba en Diem. Aptos usa Move de forma más cercana al diseño original, con un modelo de cuentas. Sui usa Sui Move, una variante adaptada a su modelo de objetos, donde cada activo es una entidad independiente con un propietario definido."
  - question: "¿Cuál es más rápida, Sui o Aptos?"
    answer: "Ambas apuestan por la ejecución paralela, pero de forma distinta. Sui procesa sin pasar por consenso completo las transacciones que solo tocan objetos de un único propietario, alcanzando finalidad casi instantánea; solo las transacciones con objetos compartidos pasan por su protocolo de consenso Mysticeti. Aptos usa Block-STM, que ejecuta transacciones en paralelo de forma optimista y las reordena si detecta conflictos, con finalidad por debajo del segundo gracias a AptosBFT."
  - question: "¿Sui o Aptos tienen suministro máximo limitado?"
    answer: "Sui tiene un techo fijo de 10.000 millones de SUI desde su lanzamiento en 2023. Aptos operó varios años sin techo de suministro, pero en 2026 la comunidad aprobó un límite máximo fijo de 2.100 millones de APT, además de empezar a quemar el 100% de las comisiones de gas."
  - question: "¿Qué las diferencia realmente si ambas nacieron del mismo equipo?"
    answer: "La diferencia técnica central está en el modelo de datos: Aptos organiza el estado en cuentas y usa Block-STM para detectar conflictos sobre la marcha, mientras que Sui organiza el estado en objetos individuales, lo que le permite saltarse el consenso por completo en transacciones simples. Aptos y Sui son proyectos independientes y hoy compiten entre sí, aunque compartan raíces técnicas."
  - question: "¿Cuál es mejor para invertir, Sui o Aptos?"
    answer: "Depende de tu tesis de inversión. Sui apuesta por casos de uso de alto volumen como gaming y aplicaciones de consumo, con un suministro fijo desde el origen. Aptos apuesta por la narrativa institucional de tokenización de activos y un modelo de tokenomics recién vuelto deflacionario. Ninguna decisión de inversión está exenta de riesgo: investiga bien antes de invertir, tanto si estás en España/Europa, Latinoamérica o en la comunidad hispana de EE.UU. y Canadá."
---

Sui y Aptos comparten algo poco común en el espacio cripto: nacieron literalmente del mismo equipo de ingenieros que trabajó en Diem, el proyecto de moneda digital de Meta cancelado en 2022. Pero desde ahí tomaron caminos técnicos distintos. Si te preguntas en qué se diferencian de verdad más allá del origen compartido, aquí tienes la comparación sin rodeos.

<!--more-->

## ¿Qué es Sui?

Sui nació de la mano de **Mysten Labs**, fundada en 2021 por **Evan Cheng, Sam Blackshear, Adeniyi Abiodun y George Danezis**, todos procedentes del equipo de Meta que trabajó en Diem (Novi). Sam Blackshear es además coautor original del lenguaje Move. Su mainnet se lanzó en **mayo de 2023**.

**Características clave de Sui:**

- Modelo de datos orientado a objetos: cada activo es una entidad independiente con propietario definido
- Transacciones de un único propietario se procesan sin pasar por consenso completo (finalidad casi instantánea)
- Consenso: Mysticeti (Proof of Stake delegado), solo para transacciones con objetos compartidos
- Contratos inteligentes en Sui Move
- Suministro fijo de 10.000 millones de SUI desde el lanzamiento

## ¿Qué es Aptos?

Aptos nació en 2021 de la mano de **Mo Shaikh** y **Avery Ching**, también ex-Diem. Fundaron Aptos Labs y lanzaron su mainnet en **octubre de 2022**.

**Características clave de Aptos:**

- Techo de suministro fijo de 2.100 millones de APT (aprobado por la comunidad en 2026)
- 100% de las comisiones de gas se queman
- Consenso: AptosBFT, basado en HotStuff (PoS)
- Arquitectura de ejecución paralela optimista mediante Block-STM
- Contratos inteligentes en Move, sobre un modelo de cuentas

## Sui vs Aptos: Comparativa directa

| Característica | Sui | Aptos |
| --- | --- | --- |
| **Mainnet** | Mayo 2023 | Octubre 2022 |
| **Fundadores** | Evan Cheng, Sam Blackshear, Adeniyi Abiodun, George Danezis | Mo Shaikh, Avery Ching |
| **Modelo de datos** | Orientado a objetos | Cuentas |
| **Arquitectura** | Procesamiento paralelo sin consenso (objetos de un propietario) | Block-STM (paralelismo optimista) |
| **Consenso** | Mysticeti (PoS delegado) | AptosBFT (HotStuff, PoS) |
| **Suministro** | 10.000M (techo fijo desde el origen) | 2.100M (techo fijo desde 2026) |
| **Lenguaje contratos** | Sui Move | Move |
| **Narrativa diferencial** | Gaming y consumo masivo | Seguridad de activos e instituciones |

## La clave técnica: objetos frente a cuentas

Aquí está la diferencia que más importa entender antes de comparar cualquier otro número.

**Sui** organiza el estado de la red como una colección de **objetos** independientes: una moneda, un NFT ó cualquier dato es un objeto con un propietario. Si una transacción solo toca objetos de un único propietario, la red puede procesarla en paralelo sin pasar por el protocolo de consenso completo, lo que le da finalidad casi instantánea. Solo cuando varias transacciones compiten por un objeto compartido (por ejemplo, un pool de liquidez) entra en juego Mysticeti.

**Aptos** mantiene un modelo de **cuentas** más tradicional, pero resuelve el paralelismo con **Block-STM**: ejecuta varias transacciones a la vez asumiendo que no chocan, y si detecta un conflicto las reordena y reejecuta automáticamente, sin que el desarrollador tenga que declarar nada de antemano.

En la práctica, Sui apuesta por evitar el consenso siempre que puede; Aptos apuesta por paralelizar y corregir sobre la marcha.

## Move contra Move: el mismo origen, dos implementaciones

Esto es lo curioso de esta comparativa: **ambas redes usan Move**, el lenguaje orientado a recursos creado por el mismo equipo en Diem para evitar la duplicación ó pérdida accidental de activos digitales.

**Aptos** usa una versión de Move más cercana al diseño original, adaptada a su modelo de cuentas. **Sui Move**, en cambio, es una variante propia que Mysten Labs adaptó específicamente a su modelo de objetos, con diferencias en cómo se referencian y transfieren los recursos. No son intercambiables: un contrato escrito para Aptos no corre en Sui sin adaptarlo.

## Tokenomics: SUI vs APT

**SUI** tiene un techo fijo de 10.000 millones de tokens desde el lanzamiento de la red, con una parte destinada a un fondo de almacenamiento que compensa a futuros validadores.

**APT** operó sin techo de suministro durante sus primeros años. En 2026 la comunidad aprobó una revisión completa de su modelo económico: fijó un máximo de 2.100 millones de APT y empezó a quemar el 100% de las comisiones de gas, con el objetivo de volver el token deflacionario a medida que crece el uso de la red.

## Ecosistema y casos de uso

**Sui** se ha posicionado especialmente en gaming y aplicaciones de consumo masivo, gracias a su enfoque en transacciones rápidas y económicas, aunque también gana terreno en DeFi y NFTs.

**Aptos** concentra su tracción en DeFi, NFTs, juegos y, sobre todo, en instituciones financieras que exploran la tokenización de activos del mundo real gracias a las garantías de seguridad de Move.

## ¿Para qué tipo de inversor es cada uno?

**Sui es para ti si:**

- Te interesa la narrativa de gaming y aplicaciones de consumo de alto volumen
- Valoras un suministro con techo fijo desde el origen del proyecto
- Prefieres un modelo técnico que minimiza el paso por consenso

**Aptos es para ti si:**

- Te interesa la narrativa institucional de tokenización de activos del mundo real
- Prefieres un modelo de tokenomics recién vuelto deflacionario
- Valoras las garantías de seguridad de Move sobre un modelo de cuentas más tradicional

## ¿Dónde comprar SUI y APT?

Tanto Sui como Aptos están disponibles en los principales exchanges. **Kraken** es una de las opciones más usadas en España, Europa, Latinoamérica y por la comunidad hispana en EE.UU. y Canadá gracias a su seguridad y cumplimiento regulatorio, aunque conviene confirmar la disponibilidad de productos según tu estado ó provincia.

Puedes registrarte a través de nuestro [enlace de afiliado en Kraken](https://invite.kraken.com/JDNW/nmlddl67) sin coste adicional para ti. También puedes explorar [Coinbase](https://advanced.coinbase.com/join/9B4EBKZ) ó [Binance](https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_IRL6V) según disponibilidad en tu país.

Si quieres profundizar en cada proyecto por separado, puedes leer nuestras guías completas: [¿Qué es Sui (SUI)?](/2026/09/07/que-es-sui/) y [¿Qué es Aptos (APT)?](/2026/08/17/que-es-aptos-apt/).

## Conclusión

Sui y Aptos comparten algo raro en cripto: el mismo linaje técnico, salido del equipo de Diem, y el mismo lenguaje base, Move. Pero desde ahí divergieron — Sui apostó por un modelo de objetos que evita el consenso siempre que puede, Aptos por un modelo de cuentas con paralelismo optimista vía Block-STM.

No hay un ganador definitivo. La elección depende de si priorizas la narrativa de consumo masivo y gaming de Sui, o la narrativa institucional y de seguridad de activos de Aptos.

---

*Este artículo contiene enlaces de afiliado. Si realizas una compra a través de ellos, podemos recibir una comisión sin coste adicional para ti. Consulta nuestra [política de afiliados](/afiliados).*

*El contenido de este blog es puramente educativo y no constituye asesoramiento financiero. Invertir en criptomonedas implica riesgos significativos; consulta a un profesional antes de tomar decisiones de inversión.*
