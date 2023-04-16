//SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract MoodDiary{

    string mood;

    function setMood(string memory _mood) public{
        mood=_mood;
    }
 // functions that don't change the state of the contract: view and doesn't require gas
    function getMood() public view returns(string memory){
        return mood;
    }
}
