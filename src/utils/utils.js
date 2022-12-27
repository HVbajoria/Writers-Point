const CONTRACT_ADDRESS = "0xA9a7DFd25fF10347b9358d04153ade9840252603";
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "WriteupId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "Title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "subTitle",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "authorName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "Content",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Wuploaded",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "coverImage",
				"type": "string"
			}
		],
		"name": "WriteupAdded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAllWriteups",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "WriteupId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "ownedBy",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subTitle",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "authorName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "coverImage",
						"type": "string"
					}
				],
				"internalType": "struct WritersPoint.Writeup[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "writeupId_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "writeupTitle_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subTitle_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "authorName_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "writeupContent_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "coverImage_",
				"type": "string"
			}
		],
		"name": "newWriteups",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "ownedBy_",
				"type": "address"
			}
		],
		"name": "tipToOwner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]
export { CONTRACT_ADDRESS, ABI }