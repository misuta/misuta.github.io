---
layout: post
title: "¿Qué es Aave (AAVE)?"
date: 2026-10-12 06:00:00 +0200
categories: Educación
author: Yukio Mizuta
image: /assets/images/que-es-aave.webp
description: "Descubre qué es Aave (AAVE), el protocolo de préstamos y depósitos descentralizados de DeFi: cómo funciona, para qué sirve el token AAVE y qué riesgos tiene."
---

En una cuenta de ahorro tradicional, el banco presta tu dinero y se queda con la mayor parte del beneficio. Aave propone otra cosa: un mercado abierto, sin intermediarios, donde cualquiera puede depositar cripto para ganar intereses o pedir prestado dejando una garantía. Te contamos cómo funciona, para toda la comunidad hispana.

<!--more-->

## El origen de Aave

Aave nació en 2017 con otro nombre: **ETHLend**, una plataforma de préstamos entre usuarios creada por el emprendedor finlandés **Stani Kulechov** sobre [Ethereum](/2026/05/04/Que-es-Ethereum/). Reunió fondos con una venta de tokens (ICO) en noviembre de 2017, pero el modelo inicial, que emparejaba a cada prestamista con un prestatario, era lento y poco líquido.

En 2018 el proyecto se rebautizó como **Aave**, que significa "fantasma" en finés, y en 2020 lanzó su protocolo actual basado en **pools de liquidez**: en lugar de buscar pareja para cada préstamo, todos los depósitos se juntan en un fondo común del que se puede pedir prestado al instante.

## ¿Cómo funciona Aave?

Aave es un protocolo de **préstamos y depósitos descentralizados**. Todo ocurre mediante contratos inteligentes, sin que ninguna empresa custodie tus fondos:

- **Depositar:** aportas una criptomoneda a un pool y recibes a cambio **aTokens**, que representan tu parte del fondo y van acumulando intereses.
- **Pedir prestado:** otros usuarios toman prestado de ese pool, pero deben dejar antes una **garantía** de más valor que lo que reciben (sobrecolateralización).
- **Intereses:** los tipos se ajustan automáticamente según la oferta y la demanda de cada activo. Cuanto más se usa un pool, más suben los intereses.

No hay verificación de identidad ni evaluación crediticia: la garantía es lo que protege el sistema.

### Garantía y liquidaciones

Cada préstamo tiene un **health factor** (factor de salud) que mide el margen entre lo prestado y la garantía depositada. Si el valor de la garantía cae y ese factor baja de 1, cualquier usuario puede **liquidar** parte de la posición: paga una porción de la deuda y recibe parte de la garantía con un descuento. Es el mecanismo que mantiene solvente el protocolo, pero también el principal riesgo para quien pide prestado.

## Los préstamos flash

Aave popularizó los **préstamos flash** (*flash loans*): préstamos sin garantía que deben pedirse y devolverse dentro de la misma transacción. Si no se devuelven, la transacción entera se revierte, como si nunca hubiera ocurrido. Se usan sobre todo en arbitraje, refinanciación de posiciones y otras operaciones técnicas, y son un ejemplo de algo que solo es posible en la lógica de los contratos inteligentes.

## El token AAVE

AAVE es el **token de gobernanza** del protocolo. Sus funciones principales son:

- **Votar** propuestas de mejora (parámetros de riesgo, nuevos activos, despliegue en nuevas redes).
- **Respaldar el protocolo**, mediante mecanismos de seguridad en los que los holders pueden depositar AAVE a cambio de recompensas, asumiendo el riesgo de que esos fondos se usen para cubrir pérdidas.

El token actual nació en octubre de 2020, cuando los holders del token original LEND lo canjearon a razón de 100 LEND por 1 AAVE. Su suministro máximo es de **16 millones de tokens**. Igual que en otros proyectos, la gobernanza puede ajustar estos mecanismos con el tiempo, así que conviene consultar la documentación oficial para conocer los parámetros vigentes.

AAVE no es necesario para usar el protocolo: puedes depositar y pedir prestado sin tenerlo.

## Versiones, redes y GHO

Aave ha evolucionado en varias versiones: **v1** (2020), **v2** (finales de 2020) y **v3** (2022), esta última con modos pensados para aprovechar mejor la garantía y limitar el riesgo de ciertos activos. Además de Ethereum, funciona en otras redes como **Polygon, Arbitrum, Optimism, Avalanche y Base**, donde las comisiones son menores, algo especialmente relevante para quien opera con importes pequeños.

En 2023 el protocolo lanzó **GHO**, su propia stablecoin descentralizada, emitida por los usuarios que piden prestado dejando garantía en Aave.

## Casos de uso

- **Obtener intereses** por criptos que, de otro modo, estarían quietas.
- **Conseguir liquidez sin vender**: pedir prestado una stablecoin dejando otra cripto como garantía.
- **Estrategias de DeFi** que combinan préstamos, intercambios y otros protocolos.

Aave comparte ecosistema con otros pilares de DeFi como [Uniswap](/2026/06/15/que-es-uniswap/), el exchange descentralizado: uno resuelve los préstamos y el otro los intercambios. Lo compararemos en nuestro próximo artículo.

## Riesgos a considerar

- **Riesgo de contratos inteligentes:** un fallo en el código puede causar pérdidas, aunque Aave ha sido auditado múltiples veces.
- **Liquidaciones:** una caída brusca de los precios puede liquidar tu posición si pides prestado.
- **Oráculos y gobernanza:** el protocolo depende de feeds de precios externos y de decisiones de la gobernanza, que pueden equivocarse.
- **Riesgo regulatorio:** las normas sobre DeFi varían según el país (España y la UE, Latinoamérica, EE. UU., Canadá) y siguen evolucionando.

> ⚠️ *Este post es únicamente educativo y no constituye asesoramiento financiero. Siempre haz tu propia investigación antes de invertir.*

## Conclusión

Aave es uno de los protocolos más veteranos y usados de DeFi: un mercado de préstamos abierto donde las reglas las marcan los contratos inteligentes y la gobernanza de sus holders. Entender cómo funcionan las garantías y las liquidaciones es clave antes de acercarse a este tipo de plataformas.
