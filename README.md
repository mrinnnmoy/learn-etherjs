<p>Installation</p>
<ul>
    <li>Type "npm install --save ethers"</li>
    <li>Go to Infura and get a node RPC url and create a "readBlockchain.js" file to query certain commands using Ether JS.
        <li>1) To get current block number i.e., being minted currently.</li>
        <li>2) Display balance of any account.</li>
        <li>and many more at Ether Js Documentation.</li>
    </li>
</ul>

<p>Interaction</p>
<ul>
    <li>Step 1: Open Remix IDE and write the contract given at "wallet.sol".</li>
    <li>Step 2: Compile and select "Injected Provider" as the environment and deploy the contract.</li>
    <li>Step 3: Write the code from "interactionSC.js" and run "node interactionSC.js" and you will get the desired outputs in the terminal.</li>
</ul>

<p>setValue</p>
<ul>
    <li>Step 1: Run "npx create-react-app client" and create a react app.</li>
    <li>Step 2: Write the code in App.js file and sign the contract to update value using metamask.</li>
    <li>Step 3: Run "node interactionSC.js" and you will get the update value in the terminal.</li>
</ul>