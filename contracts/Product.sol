// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Product {
    struct SupplyChainEntity {
        string name;
        string role;
        address entityAddress;
    }

    struct ProductDetails {
        string name;
        string description;
        SupplyChainEntity[] supplyChain;
    }

    mapping(uint256 => ProductDetails) public products;

    function addProduct(uint256 _productId, string memory _name, string memory _description) public {
        ProductDetails storage product = products[_productId];
        product.name = _name;
        product.description = _description;
    }

    function addSupplyChainEntity(uint256 _productId, string memory _name, string memory _role) public {
        ProductDetails storage product = products[_productId];
        SupplyChainEntity memory entity = SupplyChainEntity({
            name: _name,
            role: _role,
            entityAddress: msg.sender
        });
        product.supplyChain.push(entity);
    }

    function getProduct(uint256 _productId) public view returns (ProductDetails memory) {
        return products[_productId];
    }
}
