const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/369de05f506d43d8b6cfaf8a9c2c6a66`);

const queryBlockchain = async()=>{
    // To get current Block number being minted.
    const block = await provider.getBlockNumber();
    console.log("Current Block number: ",block);

    // Display balance of any account.
    const balance = await provider.getBalance("0x23232f3D5815361c73f5599daEA4c66e63952120");
    const balanceEther = ethers.utils.formatEther(balance);
    console.log("Balance of the Account is: ", balanceEther);
}
queryBlockchain();