// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TransactionToken is ERC20 {
    constructor() ERC20("TransactionToken", "TTK") {
        _mint(msg.sender, 500000 * 10 ** decimals()); // Initial supply
    }

    function transferToken(address to, uint256 amount) public returns (bool) {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _transfer(msg.sender, to, amount);
        return true;
    }
}

