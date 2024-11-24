// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract InflationManagement is ERC20Burnable, Ownable {
    constructor() ERC20("InflationManagementToken", "IMT") {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Initial supply
    }

    function adjustSupply(uint256 newSupply) public onlyOwner {
        uint256 currentSupply = totalSupply();
        if (newSupply > currentSupply) {
            _mint(owner(), newSupply - currentSupply);
        } else if (newSupply < currentSupply) {
            _burn(owner(), currentSupply - newSupply);
        }
    }
}

