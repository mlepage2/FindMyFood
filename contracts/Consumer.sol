// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Roles.sol";
import "./utils/Context.sol";

// Define a contract 'ConsumerRole' to manage this role - add, remove, check
contract ConsumerRole is Context {
    using Roles for Roles.Role;
    event ConsumerAdded(address indexed account);
    event ConsumerRemoved(address indexed account);

    Roles.Role private consumers;

    constructor() {
        _addConsumer(_msgSender());
    }

    modifier onlyConsumer() {
        require(isConsumer(_msgSender()));
        _;
    }

    function isConsumer(address account) public view returns (bool) {
        return consumers.has(account);
    }

    function addConsumer(address account) public onlyConsumer {
        _addConsumer(account);
    }

    function renounceConsumer(address account) public {
        _removeConsumer(account);
    }

    function _addConsumer(address account) internal {
        consumers.add(account);
        emit ConsumerAdded(account);
    }

    function _removeConsumer(address account) internal {
        consumers.remove(account);
        emit ConsumerRemoved(account);
    }
}
