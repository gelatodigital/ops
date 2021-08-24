/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CounterResolverWithoutTreasury,
  CounterResolverWithoutTreasuryInterface,
} from "../CounterResolverWithoutTreasury";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_counter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "COUNTER",
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
        name: "_feeToken",
        type: "address",
      },
    ],
    name: "checker",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516105ca3803806105ca83398181016040528101906100329190610084565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050506100f6565b60008151905061007e816100df565b92915050565b60006020828403121561009657600080fd5b60006100a48482850161006f565b91505092915050565b60006100b8826100bf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100e8816100ad565b81146100f357600080fd5b50565b60805160601c6104b061011a60003960008181609401526101c901526104b06000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063016c683c1461003b57806399b705791461006d575b600080fd5b61005560048036038101906100509190610215565b61008b565b604051610064939291906102e8565b60405180910390f35b6100756101c7565b60405161008291906102cd565b60405180910390f35b600060606000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631c15ff776040518163ffffffff1660e01b815260040160206040518083038186803b1580156100f857600080fd5b505afa15801561010c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610130919061023e565b905060b48142610140919061035d565b1193506346d4adf260e01b606460405160240161015d9190610326565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509250849150509193909250565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000813590506101fa8161044c565b92915050565b60008151905061020f81610463565b92915050565b60006020828403121561022757600080fd5b6000610235848285016101eb565b91505092915050565b60006020828403121561025057600080fd5b600061025e84828501610200565b91505092915050565b61027081610391565b82525050565b61027f816103a3565b82525050565b600061029082610341565b61029a818561034c565b93506102aa8185602086016103d9565b6102b38161043b565b840191505092915050565b6102c7816103cf565b82525050565b60006020820190506102e26000830184610267565b92915050565b60006060820190506102fd6000830186610276565b818103602083015261030f8185610285565b905061031e6040830184610267565b949350505050565b600060208201905061033b60008301846102be565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610368826103cf565b9150610373836103cf565b9250828210156103865761038561040c565b5b828203905092915050565b600061039c826103af565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156103f75780820151818401526020810190506103dc565b83811115610406576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b61045581610391565b811461046057600080fd5b50565b61046c816103cf565b811461047757600080fd5b5056fea26469706673582212206f725a650bb9d13d58ce7ebb860cb0506a4ff7fc24516d25c457fb9ea6c0603564736f6c63430008000033";

export class CounterResolverWithoutTreasury__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _counter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CounterResolverWithoutTreasury> {
    return super.deploy(
      _counter,
      overrides || {}
    ) as Promise<CounterResolverWithoutTreasury>;
  }
  getDeployTransaction(
    _counter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_counter, overrides || {});
  }
  attach(address: string): CounterResolverWithoutTreasury {
    return super.attach(address) as CounterResolverWithoutTreasury;
  }
  connect(signer: Signer): CounterResolverWithoutTreasury__factory {
    return super.connect(signer) as CounterResolverWithoutTreasury__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterResolverWithoutTreasuryInterface {
    return new utils.Interface(_abi) as CounterResolverWithoutTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CounterResolverWithoutTreasury {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CounterResolverWithoutTreasury;
  }
}
