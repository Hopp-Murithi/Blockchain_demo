const SHA256 = require("sha256");


class Blockchain {
    constructor() {
        this.chain = [this.generateGenesisBlock()]
        this.pendingTransactions = []
    }
    generateGenesisBlock() {
        return {
          index: 1,
          timestamp: Date.now(),
          transactions: [],
          nonce: 0,
          hash: "hash",
          previousBlockHash: "previousBlockHash",
        };
      }
      getLastBlock() {
        return this.chain[this.chain.length -1]
      }
      generateHash(previousBlockHash,pendingTransactions,timestamp) {
        let hash= "";
        let nonce = 0;

        while(hash.substring(0,3) !== "000") {
            nonce++;
            hash = SHA256(
                previousBlockHash +
          timestamp +
          JSON.stringify(pendingTransactions) +
          nonce
            ).toString();
        }
        return {hash,nonce}
      }

}