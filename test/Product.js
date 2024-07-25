const { expect } = require("chai");

describe("Product Contract", function () {
  let Product;
  let product;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    Product = await ethers.getContractFactory("Product");
    product = await Product.deploy();
    await product.deployed();
  });

  it("Should add and retrieve a product", async function () {
    await product.addProduct(1, "Apple", "A juicy red apple");
    const productDetails = await product.getProduct(1);

    expect(productDetails.name).to.equal("Apple");
    expect(productDetails.description).to.equal("A juicy red apple");
  });

  it("Should add and retrieve a supply chain entity", async function () {
    await product.addProduct(1, "Apple", "A juicy red apple");
    await product.addSupplyChainEntity(1, "John Doe", "Farmer");
    const productDetails = await product.getProduct(1);

    expect(productDetails.supplyChain[0].name).to.equal("John Doe");
    expect(productDetails.supplyChain[0].role).to.equal("Farmer");
  });
});
