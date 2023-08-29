/**
 * Create a keyPair from a provided or seed
 *
* @param {Uint8Array} [seed]
 */
export function createKeyPair(seed?: Uint8Array): {
    publicKey: any;
    secretKey: any;
};
/**
 * Generates a seed from the slashtags Namespace, name and primaryKey.
 *
 * @param {Uint8Array} pk
 * @param {string | Uint8Array} [name]
 * @returns
 */
export function generateSeed(pk: Uint8Array, name?: string | Uint8Array): any;
/**
 * Generates an blake2b hash of a buffer or string.
 *
 * @param {Uint8Array | string} input
 */
export function hash(input: Uint8Array | string): any;
//# sourceMappingURL=crypto.d.ts.map