// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// The Context contract is used to inherit the _msgSender() and _msgData() functions
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}
