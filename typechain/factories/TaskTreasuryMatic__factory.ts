/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TaskTreasuryMatic,
  TaskTreasuryMaticInterface,
} from "../TaskTreasuryMatic";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_gelato",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_service",
        type: "address",
      },
    ],
    name: "addWhitelistedService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "gelato",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCreditTokensByUser",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelistedServices",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_service",
        type: "address",
      },
    ],
    name: "removeWhitelistedService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxFee",
        type: "uint256",
      },
    ],
    name: "setMaxFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "useFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002a5138038062002a5183398181016040528101906200003791906200018e565b620000576200004b620000ab60201b60201c565b620000b360201b60201c565b600180819055508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050670de0b6b3a76400006002819055505062000208565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200018881620001ee565b92915050565b600060208284031215620001a157600080fd5b6000620001b18482850162000177565b91505092915050565b6000620001c782620001ce565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001f981620001ba565b81146200020557600080fd5b50565b60805160601c6128236200022e6000396000818161073f0152610b1a01526128236000f3fe6080604052600436106100dd5760003560e01c8063715018a61161007f578063b47064c811610059578063b47064c814610286578063c1461d57146102c3578063c63aa029146102df578063f2fde38b14610308576100dd565b8063715018a61461021b578063848f5f3d146102325780638da5cb5b1461025b576100dd565b8063573ea575116100bb578063573ea575146101735780635dfad06a1461019e5780636f192acc146101c9578063710e5d2f146101f2576100dd565b806301f59d16146100e25780631c20fadd1461010d5780632bf30a0e14610136575b600080fd5b3480156100ee57600080fd5b506100f7610331565b604051610104919061256b565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f9190611c61565b610337565b005b34801561014257600080fd5b5061015d60048036038101906101589190611c38565b610590565b60405161016a91906123c7565b60405180910390f35b34801561017f57600080fd5b5061018861073d565b604051610195919061234c565b60405180910390f35b3480156101aa57600080fd5b506101b3610761565b6040516101c091906123c7565b60405180910390f35b3480156101d557600080fd5b506101f060048036038101906101eb9190611d3b565b610892565b005b3480156101fe57600080fd5b5061021960048036038101906102149190611db3565b610b45565b005b34801561022757600080fd5b50610230610bcb565b005b34801561023e57600080fd5b5061025960048036038101906102549190611c38565b610c53565b005b34801561026757600080fd5b50610270610d3a565b60405161027d9190612331565b60405180910390f35b34801561029257600080fd5b506102ad60048036038101906102a89190611cb0565b610d63565b6040516102ba919061256b565b60405180910390f35b6102dd60048036038101906102d89190611cec565b610d88565b005b3480156102eb57600080fd5b5061030660048036038101906103019190611c38565b611149565b005b34801561031457600080fd5b5061032f600480360381019061032a9190611c38565b611231565b005b60025481565b6002600154141561037d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103749061254b565b60405180910390fd5b60026001819055506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006104128284611329565b905080826104209190612647565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506104ab858583611342565b818114156105065761050484600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061144d90919063ffffffff16565b505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fc322efa58c9cb2c39cfffdac61d35c8643f5cbf13c6a7d0034de2cf18923aff38460405161057a919061256b565b60405180910390a4505060018081905550505050565b606060006105db600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061147d565b905060008167ffffffffffffffff81111561061f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561064d5781602001602082028036833780820191505090505b50905060005b82811015610732576106ac81600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061149290919063ffffffff16565b8282815181106106e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808061072a90612708565b915050610653565b508092505050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060600061076f600561147d565b905060008167ffffffffffffffff8111156107b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156107e15781602001602082028036833780820191505090505b50905060005b828110156108895761080381600561149290919063ffffffff16565b82828151811061083c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808061088190612708565b9150506107e7565b50809250505090565b6108a63360056114ac90919063ffffffff16565b6108e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108dc9061250b565b60405180910390fd5b60006002541461093557816002541015610934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092b9061244b565b60405180910390fd5b5b81600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109bd9190612647565b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610b1557610b1383600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061144d90919063ffffffff16565b505b610b407f00000000000000000000000000000000000000000000000000000000000000008484611342565b505050565b610b4d6114dc565b73ffffffffffffffffffffffffffffffffffffffff16610b6b610d3a565b73ffffffffffffffffffffffffffffffffffffffff1614610bc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb8906124ab565b60405180910390fd5b8060028190555050565b610bd36114dc565b73ffffffffffffffffffffffffffffffffffffffff16610bf1610d3a565b73ffffffffffffffffffffffffffffffffffffffff1614610c47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3e906124ab565b60405180910390fd5b610c5160006114e4565b565b610c5b6114dc565b73ffffffffffffffffffffffffffffffffffffffff16610c79610d3a565b73ffffffffffffffffffffffffffffffffffffffff1614610ccf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc6906124ab565b60405180910390fd5b610ce38160056114ac90919063ffffffff16565b610d22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d199061242b565b60405180910390fd5b610d3681600561144d90919063ffffffff16565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6003602052816000526040600020602052806000526040600020600091509150505481565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610dda57349050610f38565b600083905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610e1a9190612331565b60206040518083038186803b158015610e3257600080fd5b505afa158015610e46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6a9190611ddc565b9050610e993330868573ffffffffffffffffffffffffffffffffffffffff166115a8909392919063ffffffff16565b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ed49190612331565b60206040518083038186803b158015610eec57600080fd5b505afa158015610f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f249190611ddc565b90508181610f329190612647565b93505050505b80600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fc091906125f1565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061109183600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206114ac90919063ffffffff16565b6110e8576110e683600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061163190919063ffffffff16565b505b808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167ff0d0e99cae184d0187b093b48894117462462379674a6e11d89c3fbb618e96b060405160405180910390a450505050565b6111516114dc565b73ffffffffffffffffffffffffffffffffffffffff1661116f610d3a565b73ffffffffffffffffffffffffffffffffffffffff16146111c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bc906124ab565b60405180910390fd5b6111d98160056114ac90919063ffffffff16565b15611219576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611210906124cb565b60405180910390fd5b61122d81600561163190919063ffffffff16565b5050565b6112396114dc565b73ffffffffffffffffffffffffffffffffffffffff16611257610d3a565b73ffffffffffffffffffffffffffffffffffffffff16146112ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a4906124ab565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561131d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113149061240b565b60405180910390fd5b611326816114e4565b50565b6000818310611338578161133a565b825b905092915050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561143c5760008373ffffffffffffffffffffffffffffffffffffffff16826040516113b09061231c565b60006040518083038185875af1925050503d80600081146113ed576040519150601f19603f3d011682016040523d82523d6000602084013e6113f2565b606091505b5050905080611436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142d9061248b565b60405180910390fd5b50611448565b611447828483611661565b5b505050565b6000611475836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6116e7565b905092915050565b600061148b8260000161186d565b9050919050565b60006114a1836000018361187e565b60001c905092915050565b60006114d4836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6118cf565b905092915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61162b846323b872dd60e01b8585856040516024016115c993929190612367565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118f2565b50505050565b6000611659836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6119b9565b905092915050565b6116e28363a9059cbb60e01b848460405160240161168092919061239e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118f2565b505050565b600080836001016000848152602001908152602001600020549050600081146118615760006001826117199190612647565b90506000600186600001805490506117319190612647565b90508181146117ec576000866000018281548110611778577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050808760000184815481106117c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480611826577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050611867565b60009150505b92915050565b600081600001805490509050919050565b60008260000182815481106118bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b6000611954826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a299092919063ffffffff16565b90506000815111156119b457808060200190518101906119749190611d8a565b6119b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119aa9061252b565b60405180910390fd5b5b505050565b60006119c583836118cf565b611a1e578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611a23565b600090505b92915050565b6060611a388484600085611a41565b90509392505050565b606082471015611a86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a7d9061246b565b60405180910390fd5b611a8f85611b55565b611ace576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ac5906124eb565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611af79190612305565b60006040518083038185875af1925050503d8060008114611b34576040519150601f19603f3d011682016040523d82523d6000602084013e611b39565b606091505b5091509150611b49828286611b68565b92505050949350505050565b600080823b905060008111915050919050565b60608315611b7857829050611bc8565b600083511115611b8b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bbf91906123e9565b60405180910390fd5b9392505050565b600081359050611bde81612791565b92915050565b600081359050611bf3816127a8565b92915050565b600081519050611c08816127bf565b92915050565b600081359050611c1d816127d6565b92915050565b600081519050611c32816127d6565b92915050565b600060208284031215611c4a57600080fd5b6000611c5884828501611bcf565b91505092915050565b600080600060608486031215611c7657600080fd5b6000611c8486828701611be4565b9350506020611c9586828701611bcf565b9250506040611ca686828701611c0e565b9150509250925092565b60008060408385031215611cc357600080fd5b6000611cd185828601611bcf565b9250506020611ce285828601611bcf565b9150509250929050565b600080600060608486031215611d0157600080fd5b6000611d0f86828701611bcf565b9350506020611d2086828701611bcf565b9250506040611d3186828701611c0e565b9150509250925092565b600080600060608486031215611d5057600080fd5b6000611d5e86828701611bcf565b9350506020611d6f86828701611c0e565b9250506040611d8086828701611bcf565b9150509250925092565b600060208284031215611d9c57600080fd5b6000611daa84828501611bf9565b91505092915050565b600060208284031215611dc557600080fd5b6000611dd384828501611c0e565b91505092915050565b600060208284031215611dee57600080fd5b6000611dfc84828501611c23565b91505092915050565b6000611e118383611e2c565b60208301905092915050565b611e268161268d565b82525050565b611e358161267b565b82525050565b611e448161267b565b82525050565b6000611e5582612596565b611e5f81856125c4565b9350611e6a83612586565b8060005b83811015611e9b578151611e828882611e05565b9750611e8d836125b7565b925050600181019050611e6e565b5085935050505092915050565b6000611eb3826125a1565b611ebd81856125d5565b9350611ecd8185602086016126d5565b80840191505092915050565b6000611ee4826125ac565b611eee81856125e0565b9350611efe8185602086016126d5565b611f0781612780565b840191505092915050565b6000611f1f6026836125e0565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f856031836125e0565b91507f5461736b54726561737572793a2061646457686974656c69737465645365727660008301527f6963653a202177686974656c69737465640000000000000000000000000000006020830152604082019050919050565b6000611feb6022836125e0565b91507f5461736b54726561737572793a2075736546756e64733a204f7665726368617260008301527f65640000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006120516026836125e0565b91507f416464726573733a20696e73756666696369656e742062616c616e636520666f60008301527f722063616c6c00000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006120b7601e836125e0565b91507f5f7472616e736665723a20455448207472616e73666572206661696c656400006000830152602082019050919050565b60006120f76020836125e0565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006121376030836125e0565b91507f5461736b54726561737572793a2061646457686974656c69737465645365727660008301527f6963653a2077686974656c6973746564000000000000000000000000000000006020830152604082019050919050565b600061219d6000836125d5565b9150600082019050919050565b60006121b7601d836125e0565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b60006121f76025836125e0565b91507f5461736b54726561737572793a206f6e6c7957686974656c697374656453657260008301527f76696365730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061225d602a836125e0565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b60006122c3601f836125e0565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b6122ff816126cb565b82525050565b60006123118284611ea8565b915081905092915050565b600061232782612190565b9150819050919050565b60006020820190506123466000830184611e3b565b92915050565b60006020820190506123616000830184611e1d565b92915050565b600060608201905061237c6000830186611e3b565b6123896020830185611e3b565b61239660408301846122f6565b949350505050565b60006040820190506123b36000830185611e3b565b6123c060208301846122f6565b9392505050565b600060208201905081810360008301526123e18184611e4a565b905092915050565b600060208201905081810360008301526124038184611ed9565b905092915050565b6000602082019050818103600083015261242481611f12565b9050919050565b6000602082019050818103600083015261244481611f78565b9050919050565b6000602082019050818103600083015261246481611fde565b9050919050565b6000602082019050818103600083015261248481612044565b9050919050565b600060208201905081810360008301526124a4816120aa565b9050919050565b600060208201905081810360008301526124c4816120ea565b9050919050565b600060208201905081810360008301526124e48161212a565b9050919050565b60006020820190508181036000830152612504816121aa565b9050919050565b60006020820190508181036000830152612524816121ea565b9050919050565b6000602082019050818103600083015261254481612250565b9050919050565b60006020820190508181036000830152612564816122b6565b9050919050565b600060208201905061258060008301846122f6565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006125fc826126cb565b9150612607836126cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561263c5761263b612751565b5b828201905092915050565b6000612652826126cb565b915061265d836126cb565b9250828210156126705761266f612751565b5b828203905092915050565b6000612686826126ab565b9050919050565b6000612698826126ab565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156126f35780820151818401526020810190506126d8565b83811115612702576000848401525b50505050565b6000612713826126cb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561274657612745612751565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b61279a8161267b565b81146127a557600080fd5b50565b6127b18161268d565b81146127bc57600080fd5b50565b6127c88161269f565b81146127d357600080fd5b50565b6127df816126cb565b81146127ea57600080fd5b5056fea264697066735822122051b73592abdad0ab557b031820d1e7975beab3d737b525c3d0ce0ded44afa5df64736f6c63430008000033";

export class TaskTreasuryMatic__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _gelato: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TaskTreasuryMatic> {
    return super.deploy(_gelato, overrides || {}) as Promise<TaskTreasuryMatic>;
  }
  getDeployTransaction(
    _gelato: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gelato, overrides || {});
  }
  attach(address: string): TaskTreasuryMatic {
    return super.attach(address) as TaskTreasuryMatic;
  }
  connect(signer: Signer): TaskTreasuryMatic__factory {
    return super.connect(signer) as TaskTreasuryMatic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TaskTreasuryMaticInterface {
    return new utils.Interface(_abi) as TaskTreasuryMaticInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TaskTreasuryMatic {
    return new Contract(address, _abi, signerOrProvider) as TaskTreasuryMatic;
  }
}