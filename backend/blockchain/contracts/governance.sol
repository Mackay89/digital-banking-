// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Governance {
    struct Proposal {
        string description;
        uint256 voteCount;
    }

    Proposal[] public proposals;
    mapping(address => uint256) public votes;

    function createProposal(string memory description) public {
        proposals.push(Proposal({
            description: description,
            voteCount: 0
        }));
    }

    function vote(uint256 proposalIndex) public {
        require(votes[msg.sender] == 0, "Already voted");
        Proposal storage proposal = proposals[proposalIndex];
        proposal.voteCount += 1;
        votes[msg.sender] = proposalIndex;
    }

    function getProposal(uint256 index) public view returns (string memory description, uint256 voteCount) {
        Proposal storage proposal = proposals[index];
        return (proposal.description, proposal.voteCount);
    }
}

