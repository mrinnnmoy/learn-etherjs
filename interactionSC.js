const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/369de05f506d43d8b6cfaf8a9c2c6a66`
);

const walletAddress = "0x2cf3df14d889ef88baa67bc488c6c758fdb8573e";
const walletABI = [
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractInteraction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletABI,
    provider
  );

  const contractName = await walletContract.name();
  console.log("Contract Name: ", contractName);

  const num = await walletContract.getValue();
  console.log("Number value: ", String(num));

  const contractBalance = await walletContract.contractBalance();
  const contractBalance1 = ethers.utils.formatEther(contractBalance);
  console.log("Contract Balance: ",contractBalance1);

  const userBalance = await walletContract.accountBalance(
    "0x23232f3D5815361c73f5599daEA4c66e63952120"
  );
  const userBalance1 = ethers.utils.formatEther(userBalance);
  console.log("User Balance: ",userBalance1);
};

contractInteraction();
