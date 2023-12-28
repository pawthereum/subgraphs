// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SwapAndLiquify extends ethereum.Event {
  get params(): SwapAndLiquify__Params {
    return new SwapAndLiquify__Params(this);
  }
}

export class SwapAndLiquify__Params {
  _event: SwapAndLiquify;

  constructor(event: SwapAndLiquify) {
    this._event = event;
  }

  get tokensSwapped(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ethReceived(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokensIntoLiqudity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SwapAndLiquifyEnabledUpdated extends ethereum.Event {
  get params(): SwapAndLiquifyEnabledUpdated__Params {
    return new SwapAndLiquifyEnabledUpdated__Params(this);
  }
}

export class SwapAndLiquifyEnabledUpdated__Params {
  _event: SwapAndLiquifyEnabledUpdated;

  constructor(event: SwapAndLiquifyEnabledUpdated) {
    this._event = event;
  }

  get enabled(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Pawthereum extends ethereum.SmartContract {
  static bind(address: Address): Pawthereum {
    return new Pawthereum("Pawthereum", address);
  }

  _burnFee(): BigInt {
    let result = super.call("_burnFee", "_burnFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__burnFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_burnFee", "_burnFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _burnFeeTotal(): BigInt {
    let result = super.call("_burnFeeTotal", "_burnFeeTotal():(uint256)", []);

    return result[0].toBigInt();
  }

  try__burnFeeTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_burnFeeTotal",
      "_burnFeeTotal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _charityFee(): BigInt {
    let result = super.call("_charityFee", "_charityFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__charityFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_charityFee", "_charityFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _charityFeeTotal(): BigInt {
    let result = super.call(
      "_charityFeeTotal",
      "_charityFeeTotal():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__charityFeeTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_charityFeeTotal",
      "_charityFeeTotal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _feeDecimal(): BigInt {
    let result = super.call("_feeDecimal", "_feeDecimal():(uint256)", []);

    return result[0].toBigInt();
  }

  try__feeDecimal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_feeDecimal", "_feeDecimal():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _liquidityFee(): BigInt {
    let result = super.call("_liquidityFee", "_liquidityFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__liquidityFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_liquidityFee",
      "_liquidityFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _liquidityFeeTotal(): BigInt {
    let result = super.call(
      "_liquidityFeeTotal",
      "_liquidityFeeTotal():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__liquidityFeeTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_liquidityFeeTotal",
      "_liquidityFeeTotal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _marketingFee(): BigInt {
    let result = super.call("_marketingFee", "_marketingFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__marketingFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_marketingFee",
      "_marketingFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _marketingFeeTotal(): BigInt {
    let result = super.call(
      "_marketingFeeTotal",
      "_marketingFeeTotal():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__marketingFeeTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_marketingFeeTotal",
      "_marketingFeeTotal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _taxFee(): BigInt {
    let result = super.call("_taxFee", "_taxFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__taxFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_taxFee", "_taxFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _taxFeeTotal(): BigInt {
    let result = super.call("_taxFeeTotal", "_taxFeeTotal():(uint256)", []);

    return result[0].toBigInt();
  }

  try__taxFeeTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_taxFeeTotal", "_taxFeeTotal():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  charityWallet(): Address {
    let result = super.call("charityWallet", "charityWallet():(address)", []);

    return result[0].toAddress();
  }

  try_charityWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "charityWallet",
      "charityWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isExcluded(account: Address): boolean {
    let result = super.call("isExcluded", "isExcluded(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isExcluded(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isExcluded", "isExcluded(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTaxActive(): boolean {
    let result = super.call("isTaxActive", "isTaxActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_isTaxActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isTaxActive", "isTaxActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marketingWallet(): Address {
    let result = super.call(
      "marketingWallet",
      "marketingWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_marketingWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "marketingWallet",
      "marketingWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxTxAmount(): BigInt {
    let result = super.call("maxTxAmount", "maxTxAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxTxAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxTxAmount", "maxTxAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minTokensBeforeSwap(): BigInt {
    let result = super.call(
      "minTokensBeforeSwap",
      "minTokensBeforeSwap():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minTokensBeforeSwap(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minTokensBeforeSwap",
      "minTokensBeforeSwap():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reflectionFromToken(tokenAmount: BigInt, deductTransferFee: boolean): BigInt {
    let result = super.call(
      "reflectionFromToken",
      "reflectionFromToken(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(deductTransferFee)
      ]
    );

    return result[0].toBigInt();
  }

  try_reflectionFromToken(
    tokenAmount: BigInt,
    deductTransferFee: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reflectionFromToken",
      "reflectionFromToken(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(deductTransferFee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapAndLiquifyEnabled(): boolean {
    let result = super.call(
      "swapAndLiquifyEnabled",
      "swapAndLiquifyEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_swapAndLiquifyEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "swapAndLiquifyEnabled",
      "swapAndLiquifyEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenFromReflection(reflectionAmount: BigInt): BigInt {
    let result = super.call(
      "tokenFromReflection",
      "tokenFromReflection(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(reflectionAmount)]
    );

    return result[0].toBigInt();
  }

  try_tokenFromReflection(
    reflectionAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenFromReflection",
      "tokenFromReflection(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(reflectionAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uniswapV2Pair(): Address {
    let result = super.call("uniswapV2Pair", "uniswapV2Pair():(address)", []);

    return result[0].toAddress();
  }

  try_uniswapV2Pair(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapV2Pair",
      "uniswapV2Pair():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uniswapV2Router(): Address {
    let result = super.call(
      "uniswapV2Router",
      "uniswapV2Router():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_uniswapV2Router(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapV2Router",
      "uniswapV2Router():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ExcludeAccountCall extends ethereum.Call {
  get inputs(): ExcludeAccountCall__Inputs {
    return new ExcludeAccountCall__Inputs(this);
  }

  get outputs(): ExcludeAccountCall__Outputs {
    return new ExcludeAccountCall__Outputs(this);
  }
}

export class ExcludeAccountCall__Inputs {
  _call: ExcludeAccountCall;

  constructor(call: ExcludeAccountCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ExcludeAccountCall__Outputs {
  _call: ExcludeAccountCall;

  constructor(call: ExcludeAccountCall) {
    this._call = call;
  }
}

export class IncludeAccountCall extends ethereum.Call {
  get inputs(): IncludeAccountCall__Inputs {
    return new IncludeAccountCall__Inputs(this);
  }

  get outputs(): IncludeAccountCall__Outputs {
    return new IncludeAccountCall__Outputs(this);
  }
}

export class IncludeAccountCall__Inputs {
  _call: IncludeAccountCall;

  constructor(call: IncludeAccountCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class IncludeAccountCall__Outputs {
  _call: IncludeAccountCall;

  constructor(call: IncludeAccountCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBurnFeeCall extends ethereum.Call {
  get inputs(): SetBurnFeeCall__Inputs {
    return new SetBurnFeeCall__Inputs(this);
  }

  get outputs(): SetBurnFeeCall__Outputs {
    return new SetBurnFeeCall__Outputs(this);
  }
}

export class SetBurnFeeCall__Inputs {
  _call: SetBurnFeeCall;

  constructor(call: SetBurnFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetBurnFeeCall__Outputs {
  _call: SetBurnFeeCall;

  constructor(call: SetBurnFeeCall) {
    this._call = call;
  }
}

export class SetCharityFeeCall extends ethereum.Call {
  get inputs(): SetCharityFeeCall__Inputs {
    return new SetCharityFeeCall__Inputs(this);
  }

  get outputs(): SetCharityFeeCall__Outputs {
    return new SetCharityFeeCall__Outputs(this);
  }
}

export class SetCharityFeeCall__Inputs {
  _call: SetCharityFeeCall;

  constructor(call: SetCharityFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCharityFeeCall__Outputs {
  _call: SetCharityFeeCall;

  constructor(call: SetCharityFeeCall) {
    this._call = call;
  }
}

export class SetCharityWalletCall extends ethereum.Call {
  get inputs(): SetCharityWalletCall__Inputs {
    return new SetCharityWalletCall__Inputs(this);
  }

  get outputs(): SetCharityWalletCall__Outputs {
    return new SetCharityWalletCall__Outputs(this);
  }
}

export class SetCharityWalletCall__Inputs {
  _call: SetCharityWalletCall;

  constructor(call: SetCharityWalletCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCharityWalletCall__Outputs {
  _call: SetCharityWalletCall;

  constructor(call: SetCharityWalletCall) {
    this._call = call;
  }
}

export class SetLiquidityFeeCall extends ethereum.Call {
  get inputs(): SetLiquidityFeeCall__Inputs {
    return new SetLiquidityFeeCall__Inputs(this);
  }

  get outputs(): SetLiquidityFeeCall__Outputs {
    return new SetLiquidityFeeCall__Outputs(this);
  }
}

export class SetLiquidityFeeCall__Inputs {
  _call: SetLiquidityFeeCall;

  constructor(call: SetLiquidityFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLiquidityFeeCall__Outputs {
  _call: SetLiquidityFeeCall;

  constructor(call: SetLiquidityFeeCall) {
    this._call = call;
  }
}

export class SetMarketingFeeCall extends ethereum.Call {
  get inputs(): SetMarketingFeeCall__Inputs {
    return new SetMarketingFeeCall__Inputs(this);
  }

  get outputs(): SetMarketingFeeCall__Outputs {
    return new SetMarketingFeeCall__Outputs(this);
  }
}

export class SetMarketingFeeCall__Inputs {
  _call: SetMarketingFeeCall;

  constructor(call: SetMarketingFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMarketingFeeCall__Outputs {
  _call: SetMarketingFeeCall;

  constructor(call: SetMarketingFeeCall) {
    this._call = call;
  }
}

export class SetMarketingWalletCall extends ethereum.Call {
  get inputs(): SetMarketingWalletCall__Inputs {
    return new SetMarketingWalletCall__Inputs(this);
  }

  get outputs(): SetMarketingWalletCall__Outputs {
    return new SetMarketingWalletCall__Outputs(this);
  }
}

export class SetMarketingWalletCall__Inputs {
  _call: SetMarketingWalletCall;

  constructor(call: SetMarketingWalletCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMarketingWalletCall__Outputs {
  _call: SetMarketingWalletCall;

  constructor(call: SetMarketingWalletCall) {
    this._call = call;
  }
}

export class SetMaxTxAmountCall extends ethereum.Call {
  get inputs(): SetMaxTxAmountCall__Inputs {
    return new SetMaxTxAmountCall__Inputs(this);
  }

  get outputs(): SetMaxTxAmountCall__Outputs {
    return new SetMaxTxAmountCall__Outputs(this);
  }
}

export class SetMaxTxAmountCall__Inputs {
  _call: SetMaxTxAmountCall;

  constructor(call: SetMaxTxAmountCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxTxAmountCall__Outputs {
  _call: SetMaxTxAmountCall;

  constructor(call: SetMaxTxAmountCall) {
    this._call = call;
  }
}

export class SetMinTokensBeforeSwapCall extends ethereum.Call {
  get inputs(): SetMinTokensBeforeSwapCall__Inputs {
    return new SetMinTokensBeforeSwapCall__Inputs(this);
  }

  get outputs(): SetMinTokensBeforeSwapCall__Outputs {
    return new SetMinTokensBeforeSwapCall__Outputs(this);
  }
}

export class SetMinTokensBeforeSwapCall__Inputs {
  _call: SetMinTokensBeforeSwapCall;

  constructor(call: SetMinTokensBeforeSwapCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinTokensBeforeSwapCall__Outputs {
  _call: SetMinTokensBeforeSwapCall;

  constructor(call: SetMinTokensBeforeSwapCall) {
    this._call = call;
  }
}

export class SetPairCall extends ethereum.Call {
  get inputs(): SetPairCall__Inputs {
    return new SetPairCall__Inputs(this);
  }

  get outputs(): SetPairCall__Outputs {
    return new SetPairCall__Outputs(this);
  }
}

export class SetPairCall__Inputs {
  _call: SetPairCall;

  constructor(call: SetPairCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPairCall__Outputs {
  _call: SetPairCall;

  constructor(call: SetPairCall) {
    this._call = call;
  }
}

export class SetSwapAndLiquifyEnabledCall extends ethereum.Call {
  get inputs(): SetSwapAndLiquifyEnabledCall__Inputs {
    return new SetSwapAndLiquifyEnabledCall__Inputs(this);
  }

  get outputs(): SetSwapAndLiquifyEnabledCall__Outputs {
    return new SetSwapAndLiquifyEnabledCall__Outputs(this);
  }
}

export class SetSwapAndLiquifyEnabledCall__Inputs {
  _call: SetSwapAndLiquifyEnabledCall;

  constructor(call: SetSwapAndLiquifyEnabledCall) {
    this._call = call;
  }

  get enabled(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetSwapAndLiquifyEnabledCall__Outputs {
  _call: SetSwapAndLiquifyEnabledCall;

  constructor(call: SetSwapAndLiquifyEnabledCall) {
    this._call = call;
  }
}

export class SetTaxActiveCall extends ethereum.Call {
  get inputs(): SetTaxActiveCall__Inputs {
    return new SetTaxActiveCall__Inputs(this);
  }

  get outputs(): SetTaxActiveCall__Outputs {
    return new SetTaxActiveCall__Outputs(this);
  }
}

export class SetTaxActiveCall__Inputs {
  _call: SetTaxActiveCall;

  constructor(call: SetTaxActiveCall) {
    this._call = call;
  }

  get value(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetTaxActiveCall__Outputs {
  _call: SetTaxActiveCall;

  constructor(call: SetTaxActiveCall) {
    this._call = call;
  }
}

export class SetTaxFeeCall extends ethereum.Call {
  get inputs(): SetTaxFeeCall__Inputs {
    return new SetTaxFeeCall__Inputs(this);
  }

  get outputs(): SetTaxFeeCall__Outputs {
    return new SetTaxFeeCall__Outputs(this);
  }
}

export class SetTaxFeeCall__Inputs {
  _call: SetTaxFeeCall;

  constructor(call: SetTaxFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTaxFeeCall__Outputs {
  _call: SetTaxFeeCall;

  constructor(call: SetTaxFeeCall) {
    this._call = call;
  }
}

export class SetTaxlessCall extends ethereum.Call {
  get inputs(): SetTaxlessCall__Inputs {
    return new SetTaxlessCall__Inputs(this);
  }

  get outputs(): SetTaxlessCall__Outputs {
    return new SetTaxlessCall__Outputs(this);
  }
}

export class SetTaxlessCall__Inputs {
  _call: SetTaxlessCall;

  constructor(call: SetTaxlessCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetTaxlessCall__Outputs {
  _call: SetTaxlessCall;

  constructor(call: SetTaxlessCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
