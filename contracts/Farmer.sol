// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Roles.sol";
import "./utils/Context.sol";

// Define a contract 'FarmerRole' to manage this role - add, remove, check
contract Farmer is Context {
    using Roles for Roles.Role;

    event FarmerAdded(address indexed account);
    event FarmerRemoved(address indexed account);

    Roles.Role private farmers;

    constructor() {
        _addFarmer(_msgSender());
    }

    modifier onlyFarmer() {
        require(isFarmer(_msgSender()));
        _;
    }

    function isFarmer(address account) public view returns (bool) {
        return farmers.has(account);
    }

    function addFarmer(address account) public onlyFarmer {
        _addFarmer(account);
    }

    function renounceFarmer() public {
        _removeFarmer(_msgSender());
    }

    function _addFarmer(address account) internal {
        farmers.add(account);
        emit FarmerAdded(account);
    }

    function _removeFarmer(address account) internal {
        farmers.remove(account);
        emit FarmerRemoved(account);
    }
}
