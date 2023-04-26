import "./App.css";
import { useEffect } from "react";
const { ethers } = require("ethers");

function App() {
  const walletAddress = "0x2cf3df14d889ef88baa67bc488c6c758fdb8573e";

  useEffect(() => {
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

    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletABI, signer);

      // Update value of the contract.
      // await contract.setValue(2);

      // Send ether from user to contract.
      // await contract.sendEthContract({value:ethers.utils.parseEther("0.5")});

      // Send ether from contract to user.
      // await contract.sendEthUser("0x4A716017E21526A0246d49695c3817FC64c19fd5", {
      //   value: ethers.utils.parseEther("0.25"),
      // });
    };
    writeContract();
  }, []);

  return (
    <div className="App">
      <p>Learn Ether JS</p>
    </div>
  );
}

export default App;
