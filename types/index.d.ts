export = KeyChain;
declare class KeyChain {
    static constants: typeof constants;
    /**
     * Create a Slashtag root keyPair using a `primaryKey` and an optional `name`.
     *
     * @param {Uint8Array} primaryKey
     * @param {string | Uint8Array} [name]
     */
    static createKeyPair(primaryKey: Uint8Array, name?: string | Uint8Array): {
        publicKey: any;
        secretKey: any;
    };
}
import constants = require("./lib/constants.js");
//# sourceMappingURL=index.d.ts.map