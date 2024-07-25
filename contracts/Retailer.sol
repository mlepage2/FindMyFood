// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Roles.sol";
import "./utils/Context.sol";

// Define a contract 'RetailerRole' to manage this role - add, remove, check
contract Retailer is Context {
    using Roles for Roles.Role;

    event RetailerAdded(address indexed account);
    event RetailerRemoved(address indexed account);

    Roles.Role private retailers;

    constructor() {
        _addRetailer(_msgSender());
    }

    modifier onlyRetailer() {
        require(isRetailer(_msgSender()));
        _;
    }

    function isRetailer(address account) public view returns (bool) {
        return retailers.has(account);
    }

    function addRetailer(address account) public onlyRetailer {
        _addRetailer(account);
    }

    function renounceRetailer() public {
        _removeRetailer(_msgSender());
    }

    function _addRetailer(address account) internal {
        retailers.add(account);
        emit RetailerAdded(account);
    }

    function _removeRetailer(address account) internal {
        retailers.remove(account);
        emit RetailerRemoved(account);
    }
}
