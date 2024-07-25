// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Roles.sol";
import './utils/Context.sol';

// Define a contract 'DistributorRole' to manage this role - add, remove, check
contract Distributor is Context {
    using Roles for Roles.Role;
    event DistributorAdded(address indexed account);
    event DistributorRemoved(address indexed account);
    Roles.Role private distributors;

    constructor() {
        _addDistributor(_msgSender());
    }

    modifier onlyDistributor() {
        require(isDistributor(_msgSender()));
        _;
    }

    function isDistributor(address account) public view returns (bool) {
        return distributors.has(account);
    }

    function addDistributor(address account) public onlyDistributor {
        _addDistributor(account);
    }

    function renounceDistributor() public {
        _removeDistributor(_msgSender());
    }

    function _addDistributor(address account) internal {
        distributors.add(account);
        emit DistributorAdded(account);
    }

    function _removeDistributor(address account) internal {
        distributors.remove(account);
        emit DistributorRemoved(account);
    }
}
