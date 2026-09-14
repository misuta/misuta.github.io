---
layout: post
title: "¿Qué es Celestia (TIA)?"
date: 2026-09-14 06:00:00 +0200
categories: Educación
author: Yukio Mizuta
image: /assets/images/que-es-celestia.webp
description: "Descubre qué es Celestia (TIA), la blockchain modular especializada en disponibilidad de datos, y cómo cambia la forma en que funcionan los rollups."
---

Casi todas las blockchains que conoces —Bitcoin, Ethereum, Solana— hacen todo a la vez: ejecutan transacciones, las ordenan y garantizan que sus datos estén disponibles. Celestia propone separar esas tareas. Te contamos en qué consiste, tanto si sigues el ecosistema desde España/Europa como desde Latinoamérica.

<!--more-->

## El origen de Celestia

Celestia nació en 2019 como un proyecto de investigación llamado **LazyLedger**, obra de Mustafa Al-Bassam —cofundador también de Chainspace, adquirida por Facebook en 2019 para lo que sería el proyecto Diem— junto a John Adler e Ismail Khoffi. El proyecto se rebautizó como Celestia en 2021, y su mainnet no llegó hasta octubre de 2023, tras varias rondas de financiación respaldadas por capital de riesgo.

## ¿Cómo funciona Celestia?

Celestia es una **blockchain modular**: en vez de encargarse de la ejecución de transacciones, se centra únicamente en dos tareas: el consenso y la **disponibilidad de datos** (data availability).

Esto es clave para los **rollups**, que ejecutan transacciones fuera de su blockchain principal pero necesitan publicar esos datos en algún sitio seguro y verificable. En lugar de construir su propia capa de seguridad desde cero, un rollup puede publicar sus datos en Celestia.

La pieza técnica que lo hace posible es el **muestreo de disponibilidad de datos** (Data Availability Sampling ó DAS): permite que nodos ligeros verifiquen que los datos de un bloque están disponibles descargando solo una pequeña muestra, sin necesidad de bajar el bloque completo. Por debajo, Celestia-app está construido con el Cosmos SDK y el motor de consenso CometBFT.

## El token TIA

TIA, el token nativo de Celestia, cumple varias funciones:

- Pago del espacio de datos (**blobspace**) que ocupan los rollups al publicar su información
- Staking para asegurar la red mediante Proof of Stake
- Participación en la gobernanza del protocolo

## Casos de uso

El caso de uso principal de Celestia son los **rollups modulares**, tanto optimistas como de validez (ZK), que usan la red como su capa de disponibilidad de datos en lugar de depender de Ethereum ú otra L1. También existen los llamados "rollups soberanos", que gestionan sus propias reglas de ejecución apoyándose solo en Celestia para el orden y la disponibilidad de los datos.

## Riesgos a considerar

Celestia compite con otras capas de disponibilidad de datos, como EigenDA ó Avail, y nada obliga a un rollup a quedarse con un proveedor concreto: puede migrar si encuentra mejores condiciones. Es además un proyecto joven, con mainnet activa solo desde finales de 2023, y una parte relevante del suministro de TIA está concentrada entre el equipo fundador y los inversores iniciales.

> ⚠️ *Este post es únicamente educativo y no constituye asesoramiento financiero. Siempre haz tu propia investigación antes de invertir.*

## Conclusión

Celestia plantea una forma distinta de construir blockchains: en vez de una red que lo hace todo, propone capas especializadas que se combinan entre sí. Es una pieza central del auge de los rollups modulares y un proyecto a seguir de cerca en el panorama de infraestructura cripto.
