// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Simple Smart that  sends Message, sets Name and number and gets the sent Message, the name and number
 * @dev A user will call this functions from the frontEnd UI to send and Sign Messages and get the result displayed on the frontend UI
 */

contract MessageSigning {
    address public owner;
    uint256 public number;
    string name;
    string message;

    constructor() {
        owner = msg.sender;
        name = "ugomars";
        message= 'MetaCrafter-Avax'
        number = 500;
    }

    /**
     * @param _newNumber the input number from a user
     * @dev sets the number to _newNumber and updates the blockchain storage
     */
    function setNumber(uint _newNumber) public returns (uint256) {
        number = _newNumber;
        return number;
    }

    /**
     * @param _name the input name from a user
     * @dev sets the name to _name and updates the blockchain storage
     */
    function setName(string calldata _name) public {
        name = _name;
    }

  /**
     * @param _message the input name from a user
     * @dev sets the name to _name and updates the blockchain storage
     */
    function sendMessage(string calldata _message) public {
        message = _message;
    }

    /**
     * @dev gets the value stored in the number storage variable
     */
    function getNumber() public view returns (uint256) {
        return number;
    }

    /**
     * @dev gets the value stored in the name storage variable
     */
    function getName() public view returns (string memory) {
        return name;
    }

function getMessage() public view returns(string memory){
    return message;
}

