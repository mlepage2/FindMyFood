import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import logo from './logo.svg';

// import Lock from "./artifacts/contracts/Lock.sol/Lock.json";
import Product from "./artifacts/contracts/Product.sol/Product.json";
import './App.css';

// const lockAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Helper Functions

// // Requests access to the user's Meta Mask Account
// // https://metamask.io/
// async function requestAccount() {
//   await window.ethereum.request({ method: 'eth_requestAccounts' });
// }

// // Fethces the current value store in the contract
// async function fetchGreeting() {
//   if (typeof window.ethereum !== "undefined") {
//     const provider = new ethers.providers.web3Provider(window.ethereum);
//     const contract = new ethers.Contract(lockAddress, Lock.abi, provider);
//     try {
//       const data = await contract.greet();
//       console.log('data: ', data);
//     } catch (err) {
//       console.log("Error: ", err);
//     }
//   }
// }

// async function setGreeting() {
//   if (!message) return;

//   if (typeof window.ethereum !== "undefined") {
//     await requestAccount();
//     const provider = new ethers.providers.web3Provider(window.ethereum);
//     const signer = provider.getSigner();

//     const contract = new ethers.Contract(lockAddress, Lock.abi, signer);
//     const transaction = await contract.setGreeting(message);
//     message = "";
//     await transaction.wait();
//     fetchGreeting();
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        setProvider(provider);
        setSigner(signer);

        const productAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const product = new ethers.Contract(productAddress, Product.abi, signer);
        setProduct(product);
      } else {
        console.log("MetaMask not installed");
      }
    };

    connectWallet();
  }, []);

  // Your UI components go here

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find My Food</h1>
        {/* Add your components */}
      </header>
    </div>
  );
}

export default App;