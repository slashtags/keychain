const b4a = require('b4a')
const sodium = require('sodium-universal')

const NS = hash('slashtags')

/**
 * Create a keyPair from a provided or seed
 *
* @param {Uint8Array} [seed]
 */
function createKeyPair (seed) {
  const publicKey = b4a.allocUnsafe(sodium.crypto_sign_PUBLICKEYBYTES)
  const secretKey = b4a.allocUnsafe(sodium.crypto_sign_SECRETKEYBYTES)

  if (seed) sodium.crypto_sign_seed_keypair(publicKey, secretKey, seed)
  else sodium.crypto_sign_keypair(publicKey, secretKey)

  return {
    publicKey,
    secretKey
  }
}

/**
 * Generates a seed from the slashtags Namespace, name and primaryKey.
 *
 * @param {Uint8Array} pk
 * @param {string | Uint8Array} [name]
 * @returns
 */
function generateSeed (pk, name = '') {
  const seed = b4a.allocUnsafe(32)
  sodium.crypto_generichash_batch(seed, [NS, b4a.from(name)], pk)
  return seed
}

/**
 * Generates an blake2b hash of a buffer or string.
 *
 * @param {Uint8Array | string} input
 */
function hash (input) {
  if (!b4a.isBuffer(input)) input = b4a.from(input)
  const output = b4a.allocUnsafe(32)
  sodium.crypto_generichash(output, input)
  return output
}

module.exports = {
  createKeyPair,
  generateSeed,
  hash
}
