const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;

// module.exports = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });

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