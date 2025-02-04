// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MultiTokenStandard is ERC1155 {
    constructor() ERC1155("https://api.example.com/metadata/{id}.json") {}

    function mintToken(address to, uint256 id, uint256 amount) public {
        _mint(to, id, amount, "");
    }
}

