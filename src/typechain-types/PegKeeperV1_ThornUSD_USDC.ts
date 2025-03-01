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

export interface PegKeeperV1_ThornUSD_USDCInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "AGGREGATOR"
      | "I"
      | "IS_INVERSE"
      | "LP"
      | "PEGGED"
      | "PEG_MUL"
      | "POOL"
      | "admin"
      | "aggregator"
      | "apply_new_admin"
      | "apply_new_receiver"
      | "calc_profit"
      | "caller_share"
      | "commit_new_admin"
      | "commit_new_receiver"
      | "debt"
      | "estimate_caller_profit"
      | "future_admin"
      | "future_receiver"
      | "last_change"
      | "new_admin_deadline"
      | "new_receiver_deadline"
      | "pegged"
      | "pool"
      | "receiver"
      | "revert_new_options"
      | "set_new_caller_share"
      | "update"
      | "withdraw_profit"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApplyNewAdmin"
      | "ApplyNewReceiver"
      | "CommitNewAdmin"
      | "CommitNewReceiver"
      | "Profit"
      | "Provide"
      | "SetNewActionDelay"
      | "SetNewCallerShare"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "AGGREGATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "I", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "IS_INVERSE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "LP", values?: undefined): string;
  encodeFunctionData(functionFragment: "PEGGED", values?: undefined): string;
  encodeFunctionData(functionFragment: "PEG_MUL", values?: undefined): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "aggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "apply_new_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "apply_new_receiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calc_profit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "caller_share",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commit_new_admin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "commit_new_receiver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "debt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "estimate_caller_profit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_receiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "last_change",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "new_admin_deadline",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "new_receiver_deadline",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pegged", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revert_new_options",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set_new_caller_share",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "update", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "withdraw_profit",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "AGGREGATOR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "I", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "IS_INVERSE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PEGGED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PEG_MUL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "aggregator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "apply_new_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apply_new_receiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calc_profit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "caller_share",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_new_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_new_receiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimate_caller_profit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_receiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "last_change",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "new_admin_deadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "new_receiver_deadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pegged", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revert_new_options",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "set_new_caller_share",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw_profit",
    data: BytesLike
  ): Result;
}

export namespace ApplyNewAdminEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApplyNewReceiverEvent {
  export type InputTuple = [newReceiver: AddressLike];
  export type OutputTuple = [newReceiver: string];
  export interface OutputObject {
    newReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CommitNewAdminEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CommitNewReceiverEvent {
  export type InputTuple = [newReceiver: AddressLike];
  export type OutputTuple = [newReceiver: string];
  export interface OutputObject {
    newReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProfitEvent {
  export type InputTuple = [lp_amount: BigNumberish];
  export type OutputTuple = [lp_amount: bigint];
  export interface OutputObject {
    lp_amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProvideEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetNewActionDelayEvent {
  export type InputTuple = [action_delay: BigNumberish];
  export type OutputTuple = [action_delay: bigint];
  export interface OutputObject {
    action_delay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetNewCallerShareEvent {
  export type InputTuple = [caller_share: BigNumberish];
  export type OutputTuple = [caller_share: bigint];
  export interface OutputObject {
    caller_share: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PegKeeperV1_ThornUSD_USDC extends BaseContract {
  connect(runner?: ContractRunner | null): PegKeeperV1_ThornUSD_USDC;
  waitForDeployment(): Promise<this>;

  interface: PegKeeperV1_ThornUSD_USDCInterface;

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

  AGGREGATOR: TypedContractMethod<[], [string], "view">;

  I: TypedContractMethod<[], [bigint], "view">;

  IS_INVERSE: TypedContractMethod<[], [boolean], "view">;

  LP: TypedContractMethod<[], [string], "view">;

  PEGGED: TypedContractMethod<[], [string], "view">;

  PEG_MUL: TypedContractMethod<[], [bigint], "view">;

  POOL: TypedContractMethod<[], [string], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  aggregator: TypedContractMethod<[], [string], "view">;

  apply_new_admin: TypedContractMethod<[], [void], "nonpayable">;

  apply_new_receiver: TypedContractMethod<[], [void], "nonpayable">;

  calc_profit: TypedContractMethod<[], [bigint], "view">;

  caller_share: TypedContractMethod<[], [bigint], "view">;

  commit_new_admin: TypedContractMethod<
    [_new_admin: AddressLike],
    [void],
    "nonpayable"
  >;

  commit_new_receiver: TypedContractMethod<
    [_new_receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  debt: TypedContractMethod<[], [bigint], "view">;

  estimate_caller_profit: TypedContractMethod<[], [bigint], "view">;

  future_admin: TypedContractMethod<[], [string], "view">;

  future_receiver: TypedContractMethod<[], [string], "view">;

  last_change: TypedContractMethod<[], [bigint], "view">;

  new_admin_deadline: TypedContractMethod<[], [bigint], "view">;

  new_receiver_deadline: TypedContractMethod<[], [bigint], "view">;

  pegged: TypedContractMethod<[], [string], "view">;

  pool: TypedContractMethod<[], [string], "view">;

  receiver: TypedContractMethod<[], [string], "view">;

  revert_new_options: TypedContractMethod<[], [void], "nonpayable">;

  set_new_caller_share: TypedContractMethod<
    [_new_caller_share: BigNumberish],
    [void],
    "nonpayable"
  >;

  update: TypedContractMethod<
    [_beneficiary: AddressLike],
    [bigint],
    "nonpayable"
  >;

  withdraw_profit: TypedContractMethod<[], [bigint], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "AGGREGATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "I"): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "IS_INVERSE"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(nameOrSignature: "LP"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PEGGED"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PEG_MUL"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "POOL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "aggregator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "apply_new_admin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "apply_new_receiver"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "calc_profit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "caller_share"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "commit_new_admin"
  ): TypedContractMethod<[_new_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "commit_new_receiver"
  ): TypedContractMethod<[_new_receiver: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "debt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimate_caller_profit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "future_admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "future_receiver"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "last_change"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "new_admin_deadline"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "new_receiver_deadline"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pegged"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receiver"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "revert_new_options"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "set_new_caller_share"
  ): TypedContractMethod<
    [_new_caller_share: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "update"
  ): TypedContractMethod<[_beneficiary: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw_profit"
  ): TypedContractMethod<[], [bigint], "nonpayable">;

  getEvent(
    key: "ApplyNewAdmin"
  ): TypedContractEvent<
    ApplyNewAdminEvent.InputTuple,
    ApplyNewAdminEvent.OutputTuple,
    ApplyNewAdminEvent.OutputObject
  >;
  getEvent(
    key: "ApplyNewReceiver"
  ): TypedContractEvent<
    ApplyNewReceiverEvent.InputTuple,
    ApplyNewReceiverEvent.OutputTuple,
    ApplyNewReceiverEvent.OutputObject
  >;
  getEvent(
    key: "CommitNewAdmin"
  ): TypedContractEvent<
    CommitNewAdminEvent.InputTuple,
    CommitNewAdminEvent.OutputTuple,
    CommitNewAdminEvent.OutputObject
  >;
  getEvent(
    key: "CommitNewReceiver"
  ): TypedContractEvent<
    CommitNewReceiverEvent.InputTuple,
    CommitNewReceiverEvent.OutputTuple,
    CommitNewReceiverEvent.OutputObject
  >;
  getEvent(
    key: "Profit"
  ): TypedContractEvent<
    ProfitEvent.InputTuple,
    ProfitEvent.OutputTuple,
    ProfitEvent.OutputObject
  >;
  getEvent(
    key: "Provide"
  ): TypedContractEvent<
    ProvideEvent.InputTuple,
    ProvideEvent.OutputTuple,
    ProvideEvent.OutputObject
  >;
  getEvent(
    key: "SetNewActionDelay"
  ): TypedContractEvent<
    SetNewActionDelayEvent.InputTuple,
    SetNewActionDelayEvent.OutputTuple,
    SetNewActionDelayEvent.OutputObject
  >;
  getEvent(
    key: "SetNewCallerShare"
  ): TypedContractEvent<
    SetNewCallerShareEvent.InputTuple,
    SetNewCallerShareEvent.OutputTuple,
    SetNewCallerShareEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "ApplyNewAdmin(address)": TypedContractEvent<
      ApplyNewAdminEvent.InputTuple,
      ApplyNewAdminEvent.OutputTuple,
      ApplyNewAdminEvent.OutputObject
    >;
    ApplyNewAdmin: TypedContractEvent<
      ApplyNewAdminEvent.InputTuple,
      ApplyNewAdminEvent.OutputTuple,
      ApplyNewAdminEvent.OutputObject
    >;

    "ApplyNewReceiver(address)": TypedContractEvent<
      ApplyNewReceiverEvent.InputTuple,
      ApplyNewReceiverEvent.OutputTuple,
      ApplyNewReceiverEvent.OutputObject
    >;
    ApplyNewReceiver: TypedContractEvent<
      ApplyNewReceiverEvent.InputTuple,
      ApplyNewReceiverEvent.OutputTuple,
      ApplyNewReceiverEvent.OutputObject
    >;

    "CommitNewAdmin(address)": TypedContractEvent<
      CommitNewAdminEvent.InputTuple,
      CommitNewAdminEvent.OutputTuple,
      CommitNewAdminEvent.OutputObject
    >;
    CommitNewAdmin: TypedContractEvent<
      CommitNewAdminEvent.InputTuple,
      CommitNewAdminEvent.OutputTuple,
      CommitNewAdminEvent.OutputObject
    >;

    "CommitNewReceiver(address)": TypedContractEvent<
      CommitNewReceiverEvent.InputTuple,
      CommitNewReceiverEvent.OutputTuple,
      CommitNewReceiverEvent.OutputObject
    >;
    CommitNewReceiver: TypedContractEvent<
      CommitNewReceiverEvent.InputTuple,
      CommitNewReceiverEvent.OutputTuple,
      CommitNewReceiverEvent.OutputObject
    >;

    "Profit(uint256)": TypedContractEvent<
      ProfitEvent.InputTuple,
      ProfitEvent.OutputTuple,
      ProfitEvent.OutputObject
    >;
    Profit: TypedContractEvent<
      ProfitEvent.InputTuple,
      ProfitEvent.OutputTuple,
      ProfitEvent.OutputObject
    >;

    "Provide(uint256)": TypedContractEvent<
      ProvideEvent.InputTuple,
      ProvideEvent.OutputTuple,
      ProvideEvent.OutputObject
    >;
    Provide: TypedContractEvent<
      ProvideEvent.InputTuple,
      ProvideEvent.OutputTuple,
      ProvideEvent.OutputObject
    >;

    "SetNewActionDelay(uint256)": TypedContractEvent<
      SetNewActionDelayEvent.InputTuple,
      SetNewActionDelayEvent.OutputTuple,
      SetNewActionDelayEvent.OutputObject
    >;
    SetNewActionDelay: TypedContractEvent<
      SetNewActionDelayEvent.InputTuple,
      SetNewActionDelayEvent.OutputTuple,
      SetNewActionDelayEvent.OutputObject
    >;

    "SetNewCallerShare(uint256)": TypedContractEvent<
      SetNewCallerShareEvent.InputTuple,
      SetNewCallerShareEvent.OutputTuple,
      SetNewCallerShareEvent.OutputObject
    >;
    SetNewCallerShare: TypedContractEvent<
      SetNewCallerShareEvent.InputTuple,
      SetNewCallerShareEvent.OutputTuple,
      SetNewCallerShareEvent.OutputObject
    >;

    "Withdraw(uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
