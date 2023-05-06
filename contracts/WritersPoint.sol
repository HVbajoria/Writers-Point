//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract WritersPoint {
    event WriteupAdded(
        uint256 WriteupId,
        address owner,
        string Title,
        string subTitle,
        string authorName,
        string Content,
        uint Wuploaded,
        string coverImage
    );

    struct Writeup {
        uint256 WriteupId;
        address ownedBy;
        string Title;
        string subTitle;
        string authorName;
        string Content;
        uint256 timestamp;
        string coverImage;
    }

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    Writeup[] writeups;

    function getAllWriteups() public view returns (Writeup[] memory) {
        return writeups;
    }

    function newWriteups(
        uint256 writeupId_,
        string memory writeupTitle_,
        string memory subTitle_,
        string memory authorName_,
        string memory writeupContent_,
        string memory coverImage_
    ) public {
        writeups.push(
            Writeup(
                writeupId_,
                payable(msg.sender),
                writeupTitle_,
                subTitle_,
                authorName_,
                writeupContent_,
                block.timestamp,
                coverImage_
            )
        );

        emit WriteupAdded(
            writeupId_,
            msg.sender,
            writeupTitle_,
            subTitle_,
            authorName_,
            writeupContent_,
            block.timestamp,
            coverImage_
        );
    }

    function tipToOwner(address payable ownedBy_) external payable {
        require(msg.value > 0, 'Pls send more than 0.001 MATIC');
        ownedBy_.transfer(msg.value);
    }
}
