// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Product {
    string public name;
    string public description;

    constructor(string memory _name, string memory _description) {
        name = _name;
        description = _description;
    }
}
