//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Shukuru {
    // admin 
    address public owner;
    uint256 public count;
    string public welcomeMsg;

    // event
    event JoinEvent(
        address memberAddress,
        string name,
        int age,
        uint256 joinedAt
        );

    // change msg event
    event ChangeMsgEvent(string oldMsg, string newMsg);

    // members list
    Member[] members;

    // member mapping
    mapping(address => Member) public member;

    struct Member {
        address memberAddress;
        string name;
        int age;
        uint256 joinedAt;
    }

    constructor(string memory newMsg) {
        owner = msg.sender;
        welcomeMsg = newMsg;
    }


    function join(address _memberAddress, string memory _name, int _age) public {
        count ++;
        members.push(Member(
            _memberAddress,
            _name,
            _age,
            block.timestamp
        ));
    }

    function getAllMembers() public view returns(Member[] memory) {
        return members;
    }

    // function getMember(address _memberAddress) public view returns(Member memory) {
    //     return Member[msg.sender] = Member.name;
    // }
}