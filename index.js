const constants = require('./lib/constants.js')
const crypto = require('./lib/crypto.js')

class KeyChain {
  static constants = constants

  /**
   * Create a Slashtag root keyPair using a `primaryKey` and an optional `name`.
   *
   * @param {Uint8Array} primaryKey
   * @param {string | Uint8Array} [name]
   */
  static createKeyPair (primaryKey, name) {
    const seed = crypto.generateSeed(primaryKey, name)
    return crypto.createKeyPair(seed)
  }
}

module.exports = KeyChain
