/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface Vault_LP_ATIHOLDInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "owner"
      | "supportsInterface"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "CALCULATE_PRECISION"
      | "admin"
      | "claimReward"
      | "feePool"
      | "globalIndex"
      | "initialize"
      | "lastUpdated"
      | "newStakers"
      | "onERC721Received"
      | "pause"
      | "paused"
      | "positionManager"
      | "rps"
      | "stakedNFTs"
      | "stakerToIndexToNFTID"
      | "stakerToNumberStakeNFT"
      | "stakers"
      | "tickLower"
      | "tickUpper"
      | "timeUnlock"
      | "token0"
      | "token1"
      | "tokenRewards"
      | "totalStaked"
      | "totalStaker"
      | "unpause"
      | "unstake"
      | "updateAdmin"
      | "updateGlobalIndex"
      | "updateReward"
      | "updateRps"
      | "updateTick"
      | "updateTimeUnlock"
      | "updateUpdater"
      | "updater"
      | "viewReward"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "ProxyImplementationUpdated"
      | "Claimed"
      | "Initialized"
      | "Paused"
      | "Staked"
      | "Unpaused"
      | "Unstaked"
  ): EventFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "CALCULATE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "globalIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newStakers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rps", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakedNFTs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakerToIndexToNFTID",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakerToNumberStakeNFT",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "tickLower", values?: undefined): string;
  encodeFunctionData(functionFragment: "tickUpper", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "timeUnlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGlobalIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRps",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTick",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTimeUnlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUpdater",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CALCULATE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "globalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newStakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakedNFTs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakerToIndexToNFTID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakerToNumberStakeNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickLower", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickUpper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timeUnlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGlobalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateRps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateTick", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTimeUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUpdater",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "viewReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProxyImplementationUpdatedEvent {
  export type InputTuple = [
    previousImplementation: AddressLike,
    newImplementation: AddressLike
  ];
  export type OutputTuple = [
    previousImplementation: string,
    newImplementation: string
  ];
  export interface OutputObject {
    previousImplementation: string;
    newImplementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimedEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [
    user: AddressLike,
    tokenId: BigNumberish,
    liquidity: BigNumberish
  ];
  export type OutputTuple = [user: string, tokenId: bigint, liquidity: bigint];
  export interface OutputObject {
    user: string;
    tokenId: bigint;
    liquidity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnstakedEvent {
  export type InputTuple = [user: AddressLike, tokenId: BigNumberish];
  export type OutputTuple = [user: string, tokenId: bigint];
  export interface OutputObject {
    user: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Vault_LP_ATIHOLD extends BaseContract {
  connect(runner?: ContractRunner | null): Vault_LP_ATIHOLD;
  waitForDeployment(): Promise<this>;

  interface: Vault_LP_ATIHOLDInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  owner: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<[id: BytesLike], [boolean], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  CALCULATE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  claimReward: TypedContractMethod<[], [void], "nonpayable">;

  feePool: TypedContractMethod<[], [bigint], "view">;

  globalIndex: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      _updater: AddressLike,
      _positionManager: AddressLike,
      _token0: AddressLike,
      _token1: AddressLike,
      _feePool: BigNumberish,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      _tokenRewards: AddressLike,
      _rps: BigNumberish,
      _timeUnlock: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  lastUpdated: TypedContractMethod<[], [bigint], "view">;

  newStakers: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  onERC721Received: TypedContractMethod<
    [
      arg0: AddressLike,
      _from: AddressLike,
      _tokenId: BigNumberish,
      arg3: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  positionManager: TypedContractMethod<[], [string], "view">;

  rps: TypedContractMethod<[], [bigint], "view">;

  stakedNFTs: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        owner: string;
        liquidity: bigint;
        status: bigint;
      }
    ],
    "view"
  >;

  stakerToIndexToNFTID: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  stakerToNumberStakeNFT: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  stakers: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint] & {
        balance: bigint;
        index: bigint;
        pendingReward: bigint;
      }
    ],
    "view"
  >;

  tickLower: TypedContractMethod<[], [bigint], "view">;

  tickUpper: TypedContractMethod<[], [bigint], "view">;

  timeUnlock: TypedContractMethod<[], [bigint], "view">;

  token0: TypedContractMethod<[], [string], "view">;

  token1: TypedContractMethod<[], [string], "view">;

  tokenRewards: TypedContractMethod<[], [string], "view">;

  totalStaked: TypedContractMethod<[], [bigint], "view">;

  totalStaker: TypedContractMethod<[], [bigint], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  unstake: TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  updateAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  updateGlobalIndex: TypedContractMethod<[], [void], "nonpayable">;

  updateReward: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  updateRps: TypedContractMethod<[_rps: BigNumberish], [void], "nonpayable">;

  updateTick: TypedContractMethod<
    [_tickLower: BigNumberish, _tickUpper: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateTimeUnlock: TypedContractMethod<
    [_timeUnlock: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateUpdater: TypedContractMethod<
    [_updater: AddressLike],
    [void],
    "nonpayable"
  >;

  updater: TypedContractMethod<[], [string], "view">;

  viewReward: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  withdraw: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[id: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "CALCULATE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "feePool"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "globalIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _updater: AddressLike,
      _positionManager: AddressLike,
      _token0: AddressLike,
      _token1: AddressLike,
      _feePool: BigNumberish,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      _tokenRewards: AddressLike,
      _rps: BigNumberish,
      _timeUnlock: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastUpdated"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "newStakers"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      _from: AddressLike,
      _tokenId: BigNumberish,
      arg3: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "positionManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rps"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "stakedNFTs"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        owner: string;
        liquidity: bigint;
        status: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakerToIndexToNFTID"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakerToNumberStakeNFT"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "stakers"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint] & {
        balance: bigint;
        index: bigint;
        pendingReward: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "tickLower"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tickUpper"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "timeUnlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenRewards"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalStaked"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalStaker"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unstake"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateGlobalIndex"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateReward"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateRps"
  ): TypedContractMethod<[_rps: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateTick"
  ): TypedContractMethod<
    [_tickLower: BigNumberish, _tickUpper: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateTimeUnlock"
  ): TypedContractMethod<[_timeUnlock: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateUpdater"
  ): TypedContractMethod<[_updater: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updater"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "viewReward"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ProxyImplementationUpdated"
  ): TypedContractEvent<
    ProxyImplementationUpdatedEvent.InputTuple,
    ProxyImplementationUpdatedEvent.OutputTuple,
    ProxyImplementationUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Claimed"
  ): TypedContractEvent<
    ClaimedEvent.InputTuple,
    ClaimedEvent.OutputTuple,
    ClaimedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Unstaked"
  ): TypedContractEvent<
    UnstakedEvent.InputTuple,
    UnstakedEvent.OutputTuple,
    UnstakedEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "ProxyImplementationUpdated(address,address)": TypedContractEvent<
      ProxyImplementationUpdatedEvent.InputTuple,
      ProxyImplementationUpdatedEvent.OutputTuple,
      ProxyImplementationUpdatedEvent.OutputObject
    >;
    ProxyImplementationUpdated: TypedContractEvent<
      ProxyImplementationUpdatedEvent.InputTuple,
      ProxyImplementationUpdatedEvent.OutputTuple,
      ProxyImplementationUpdatedEvent.OutputObject
    >;

    "Claimed(address,uint256)": TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;
    Claimed: TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "Staked(address,uint256,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Unstaked(address,uint256)": TypedContractEvent<
      UnstakedEvent.InputTuple,
      UnstakedEvent.OutputTuple,
      UnstakedEvent.OutputObject
    >;
    Unstaked: TypedContractEvent<
      UnstakedEvent.InputTuple,
      UnstakedEvent.OutputTuple,
      UnstakedEvent.OutputObject
    >;
  };
}
