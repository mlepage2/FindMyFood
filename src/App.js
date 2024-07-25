import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import logo from './logo.svg';

import Product from "./artifacts/contracts/Product.sol/Product.json";
import './App.css';

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

        const productAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const product = new ethers.Contract(productAddress, Product.abi, signer);
        setProduct(product);
      } else {
        console.log("MetaMask not installed");
      }
    };

    connectWallet();
  }, []);

  // TODO: UI prototype
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find My Food</h1>
      </header>
    </div>
  );
}

export default App;