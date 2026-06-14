---
layout: post
title: "¿Qué es Uniswap? El exchange descentralizado más popular de DeFi"
date: 2026-06-15 06:00:00 +0200
categories: [educacion]
tags: [uniswap, uni, defi, ethereum, dex, altcoins]
description: "Descubre qué es Uniswap, cómo funciona su modelo de liquidez AMM, qué es el token UNI y por qué es el exchange descentralizado más usado del ecosistema DeFi."
image: /assets/images/que-es-uniswap.webp
faq:
  - question: "¿Qué es Uniswap?"
    answer: "Uniswap es un exchange descentralizado (DEX) construido sobre Ethereum que permite intercambiar tokens directamente desde tu cartera, sin registro ni intermediarios, usando un modelo de liquidez automatizado llamado AMM."
  - question: "¿Cómo funciona el AMM de Uniswap?"
    answer: "En lugar de un libro de órdenes, Uniswap usa pools de liquidez donde el precio se determina automáticamente mediante la fórmula x × y = k. Cuando alguien compra un token, su precio sube; cuando lo vende, baja."
  - question: "¿Para qué sirve el token UNI?"
    answer: "UNI es el token de gobernanza de Uniswap. Permite a sus holders votar sobre cambios en el protocolo y la gestión del tesoro. No es necesario para usar el exchange."
  - question: "¿Es seguro usar Uniswap?"
    answer: "Uniswap ha sido auditado múltiples veces y su código es abierto. Los principales riesgos son los tokens fraudulentos, el impermanent loss para proveedores de liquidez y las comisiones de gas en Ethereum mainnet."
---

Si alguna vez has oído hablar de DeFi, es probable que el nombre **Uniswap** haya aparecido. Es el exchange descentralizado más usado del mundo cripto, y funciona de una forma radicalmente diferente a los exchanges tradicionales como Kraken o Binance.

<!--more-->

## ¿Qué es Uniswap?

Uniswap es un **exchange descentralizado** (*DEX*) construido sobre Ethereum que permite intercambiar tokens directamente desde tu cartera, sin registros, sin verificación de identidad y sin un intermediario que custodie tus fondos.

Fue creado por **Hayden Adams** y lanzado en noviembre de 2018, con el apoyo de una subvención de la Ethereum Foundation. Lo que empezó como un experimento se convirtió en el protocolo DeFi con mayor volumen de negociación del mundo.

La diferencia clave respecto a un exchange centralizado: en Uniswap **no hay libro de órdenes**. En su lugar, funciona gracias a un mecanismo llamado **AMM** (Automated Market Maker).

## ¿Cómo funciona el modelo AMM?

En un exchange tradicional, los compradores y vendedores colocan órdenes y el exchange las empareja. Uniswap funciona de otra manera: en lugar de órdenes, usa **pools de liquidez**.

Un pool de liquidez es un contrato inteligente que contiene dos tokens (por ejemplo, ETH y USDC). Cualquier usuario puede intercambiar uno por el otro, y el precio se determina automáticamente mediante una fórmula matemática simple:

**x × y = k**

Donde *x* e *y* son las cantidades de cada token en el pool, y *k* es una constante. Cuando alguien compra ETH del pool, el precio sube porque hay menos ETH; cuando vende ETH, el precio baja. Sin intermediarios, sin órdenes pendientes.

### ¿Quién aporta la liquidez?

Cualquier persona puede convertirse en **proveedor de liquidez** (*liquidity provider* o LP). Para ello, deposita una cantidad equivalente en valor de los dos tokens del par en el pool. A cambio, recibe una parte de las comisiones que pagan los traders que usan ese pool.

En Uniswap v3, los proveedores de liquidez pueden concentrar su capital en rangos de precio específicos, lo que aumenta la eficiencia del capital pero también la complejidad de la gestión.

## Las versiones de Uniswap

Uniswap ha evolucionado con el tiempo:

- **v1 (2018):** Primera versión, solo pares ETH/token.
- **v2 (2020):** Permitió pares token/token directos. Fue la versión que masificó el uso de los DEX.
- **v3 (2021):** Introdujo la liquidez concentrada en rangos de precio, mejorando la eficiencia del capital hasta 4.000 veces respecto a v2.
- **v4 (2024):** Introdujo los *hooks*, módulos personalizables que permiten a los desarrolladores añadir lógica personalizada a los pools (comisiones dinámicas, gestión automática de rangos, etc.).

## ¿Qué es el token UNI?

UNI es el **token de gobernanza** de Uniswap. Fue lanzado en septiembre de 2020 con un *airdrop* histórico: todos los usuarios que habían interactuado con el protocolo antes del 1 de septiembre recibieron **400 UNI** de forma gratuita —un regalo valorado en miles de dólares al pico del mercado.

Las funciones de UNI son:

1. **Votar en la gobernanza del protocolo:** los holders de UNI pueden proponer y votar cambios en el protocolo, incluyendo la activación de comisiones para el tesoro.
2. **Participar en el tesoro:** Uniswap gestiona uno de los mayores tesoros del ecosistema DeFi, financiado con una parte de las comisiones cuando la gobernanza lo activa.

UNI no es necesario para usar Uniswap. Cualquier persona puede intercambiar tokens o aportar liquidez sin tener UNI.

El suministro máximo de UNI está **limitado a 1.000 millones de tokens**, distribuidos entre el equipo, inversores, la comunidad y el tesoro del protocolo. Su máximo histórico fue de **44,97 dólares** en mayo de 2021.

## Uniswap y el ecosistema DeFi

Uniswap no es solo un exchange: es una pieza central del ecosistema DeFi. Muchos otros protocolos utilizan sus pools como fuente de liquidez o como oráculo de precios de referencia.

Está disponible en múltiples redes más allá de Ethereum: **Polygon, Arbitrum, Optimism, Base** y otras redes de capa 2, donde las comisiones son significativamente menores. Esto lo hace accesible tanto para usuarios en España y Europa como para la comunidad de Latinoamérica, donde las comisiones reducidas de L2 son especialmente relevantes.

## Uniswap vs. exchanges centralizados

| | Uniswap (DEX) | Exchange centralizado |
|---|---|---|
| **Custodia de fondos** | Tú mismo (non-custodial) | El exchange |
| **KYC / verificación** | No requerido | Obligatorio |
| **Disponibilidad** | 24/7, sin permisos | Puede bloquear cuentas |
| **Tokens disponibles** | Cualquier token ERC-20 | Lista curada |
| **Riesgo** | Contratos inteligentes | Contraparte centralizada |

La ventaja principal de Uniswap es la **soberanía sobre tus fondos**: nadie puede congelar tu cuenta ni impedir que operes. La desventaja es que el riesgo de los contratos inteligentes recae sobre el usuario.

## ¿Es seguro usar Uniswap?

Uniswap ha sido auditado múltiples veces y su código es abierto. Sin embargo, el ecosistema DeFi no está exento de riesgos:

- **Tokens fraudulentos:** cualquiera puede crear un token ERC-20 y añadirlo a un pool. Verifica siempre la dirección del contrato antes de comprar.
- **Impermanent loss:** si aportas liquidez, el valor relativo de tus tokens puede cambiar respecto a simplemente haberlos guardado en tu cartera.
- **Comisiones de gas:** en la red principal de Ethereum, las comisiones pueden ser elevadas en momentos de congestión. Las redes L2 reducen este problema.

## ¿Es UNI una buena inversión?

Como toda criptomoneda, UNI es un activo volátil. El token ha caído más de un 90% desde su máximo histórico. Antes de invertir, infórmate bien y evalúa tu tolerancia al riesgo.

Si quieres comprar UNI de forma sencilla y segura, en nuestra próxima guía te explicamos paso a paso cómo hacerlo en [Kraken](https://invite.kraken.com/JDNW/nmlddl67).

---

*Este artículo contiene enlaces de afiliado. Si realizas una compra a través de ellos, podemos recibir una comisión sin coste adicional para ti. Consulta nuestra [política de afiliados](/afiliados).*

*El contenido de este blog es puramente educativo y no constituye asesoramiento financiero. Invertir en criptomonedas implica riesgos significativos; consulta a un profesional antes de tomar decisiones de inversión.*
