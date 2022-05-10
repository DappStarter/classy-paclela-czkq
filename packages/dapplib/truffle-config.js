require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name return machine horn grace glide equal gaze'; 
let testAccounts = [
"0x23a72c1ff3faec4b2da899e0b4339b6c494b45d999f25a1bd64d17f7be799088",
"0xa20ebcfdb16b060f1bfc05280cd033ebd8885af14ce1e7e8da8441905a9f71db",
"0xb63c76b0c5a1ea21e215495db73d7a82dd9512c03a76ae92305c4deef5a3598f",
"0xaa8013b2a1f61a10c2792416c4df8ffe1afb9957068c664d10629ba211fbb70e",
"0x49c3190fb50d405f8c38f14539269267eae52161fb8fc1df0ef95fa0db8223d1",
"0x89a001c5fabbbb964eafcfe6c2cff5eb14c58ad4e1a0a29af2bccea56d8205cf",
"0x80b16c434c45844348315a462a224aa138e8b5031e5488a59c24776183b5ed45",
"0xb0569506fc1c406e6917cb3d13fda5d5c34b2cfc21bb1db34f975d848456e892",
"0xda1dc83d44af2368111175e70b6b35ca0aea42c40ee0c83f9782a112060dccc8",
"0x7514e17ffdec199f0a1577767ab3a783e15169416b68aded7deb16a260eb1b02"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

