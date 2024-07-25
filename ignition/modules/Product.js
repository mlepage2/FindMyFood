const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const DEFAULT_NAME = "Default Product";
const DEFAULT_DESCRIPTION = "A default product description";

module.exports = buildModule("ProductModule", (m) => {
  // Define parameters for the Product contract if necessary
  const name = m.getParameter("name", DEFAULT_NAME);
  const description = m.getParameter("description", DEFAULT_DESCRIPTION);

  // Deploy the Product contract with parameters
  const product = m.contract("Product", [name, description]);

  return { product };
});