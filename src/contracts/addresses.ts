interface contractAddresses {
  ChainName: string,
  OldToken: `0x${string}`,
  PoxmeToken: `0x${string}`,
  PoMembership: `0x${string}`,
  PoAffiliate: `0x${string}`,
  PoXMigration: `0x${string}`,
  OldFaucet: `0x${string}`,
  Staking: `0x${string}`
}

const addresses = (id: number | undefined): contractAddresses => {
  switch (id) {
    case 56:
      return {
        "ChainName": "BNB Chain",
        "OldToken": "0x3920123482070c1a2dff73aad695c60e7c6f6862",
        "PoxmeToken": "0x000000000000000000000000000000000000dead",
        "PoMembership": "0x000000000000000000000000000000000000dead",
        "PoAffiliate": "0x000000000000000000000000000000000000dead",
        "PoXMigration": "0x000000000000000000000000000000000000dead",
        "OldFaucet": "0x000000000000000000000000000000000000dead",
        "Staking": "0xb18fab4c6f054e734ea169561787cc87928f54ee"
      }
      break;
    case 97:
      return {
        "ChainName": "BSC Testnet",
        "OldToken": "0xf74b72d10f0aafb96ab51c2d10d347ba364ec845",
        "PoxmeToken": "0x557c299b3f4f5a6f0c79ce9bf081d6c6228a65c0",
        "PoMembership": "0xf49329abd582f1ddd614bd4e1fab66ef3b60b445",
        "PoAffiliate": "0xb608f52550fd926ae2a5aac18fcb0f19cd6f42e6",
        "PoXMigration": "0xc75ddcbd82dcf7e22dd69d50232eac04ec8cfdd9",
        "OldFaucet": "0xf7820b43c5594f013a770adbfefb23f5e3be0fd7",
        "Staking": "0x85ebd0b325b452b7c3787f366118fc32da28c8db"
      }
      break;
    default:
      return {
        "ChainName": "none",
        "OldToken": "0x000000000000000000000000000000000000dead",
        "PoxmeToken": "0x000000000000000000000000000000000000dead",
        "PoMembership": "0x000000000000000000000000000000000000dead",
        "PoAffiliate": "0x000000000000000000000000000000000000dead",
        "PoXMigration": "0x000000000000000000000000000000000000dead",
        "OldFaucet": "0x000000000000000000000000000000000000dead",
        "Staking": "0x000000000000000000000000000000000000dead"
      }
      break;
  }
}

export default addresses;
