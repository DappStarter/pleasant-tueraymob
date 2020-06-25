require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remind modify grace narrow furnace swift'; 
let testAccounts = [
"0xa0625657c921211bdd08d96b45f5d5900e248f1963b361f5a7ca8c64231b6b41",
"0xa399c06f99504f0c43d019553657fb1098fe93d58158805435531b8ab8c0e4a6",
"0xce62a87c644864193c4cbfe32a790fb8ebea18d6127dd2ed02595ef293170b49",
"0x52da0439f59ec52090cb2abb30a6cdedf6e2c825b4be52b95ffb85d22c5dc7a0",
"0xc837a4d239faea153bf72ee6cd9556daa3301a8fac9a4ce2bad0b726d3695e43",
"0x895bf245e4de24c6295693e00123b5f57e6c8214d51e08fb584998c648614301",
"0x908131c31dd983f90e137eb3bd5c04d70fa44f9040713bd36248e04050418e8d",
"0x6f54c8dd671ec5a06c7432e07cf47b110c764038743490378196726c23d6086c",
"0x11e292d34e542a800f55ab9ca0bd70870e6a60036f690ad06bbfa33baaed4cc0",
"0x529a819771fd9ebaa615238846aa7f0efe36393ce090f156689684844c9105ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
