# slashtags-keychain

A utility module for generating keyPairs for Slashtags

## Installation

```
npm install @synonymdev/slashtags-keychain
```

## Usage

```js
const KeyChain = require('@synonymdev/slashtags-keychain')

// Create a default keyPair from a `primaryKey`
const defaultKeyPair = KeyChain.createKeyPair(primaryKey)

// Create a default keyPair from a `primaryKey` and a `name`
const namedKeyPair = KeyChain.createKeyPair(primaryKey, name)
```

### PrimaryKey

The `primaryKey` is a seed used to generate multiple Slashtags KeyPairs.

In practice a Bitcoin wallet should generate the `primaryKey` from Bitcoin seed or a mnemonic phrase as fololws:

```js
import bip39 from 'bip39'
import { BIP32Factory as bip32 } from 'bip32'
import * as ecc from 'tiny-secp256k1'
import SDK, { constants } from '@synonymdev/slashtags-sdk'

const mnemonic = constants.MNEMONIC_TO_PRIMARY_KEY_TEST_VECTORS[0].mnemonic
console.log('Mnemonic:', mnemonic)

const seed = await bip39.mnemonicToSeed(mnemonic)
console.log('\nSeed:', seed.toString('hex'))

const root = bip32(ecc).fromSeed(seed) // Network: bitcoin mainnet

const primaryKey = root.derivePath(constants.PRIMARY_KEY_DERIVATION_PATH).privateKey
```
