import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  OwnershipTransferred,
  PurrUpdated,
  SwapAndLiquify,
  SwapAndLiquifyEnabledUpdated,
  Transfer
} from "../generated/Pawthereum/Pawthereum"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPurrUpdatedEvent(
  enabled: boolean,
  buyTaxFee: BigInt,
  buyLiquidityFee: BigInt,
  buyBurnFee: BigInt,
  buyMarketingFee: BigInt,
  buyCharityFee: BigInt,
  buyStakingFee: BigInt,
  sellTaxFee: BigInt,
  sellLiquidityFee: BigInt,
  sellBurnFee: BigInt,
  sellMarketingFee: BigInt,
  sellCharityFee: BigInt,
  sellStakingFee: BigInt
): PurrUpdated {
  let purrUpdatedEvent = changetype<PurrUpdated>(newMockEvent())

  purrUpdatedEvent.parameters = new Array()

  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyTaxFee",
      ethereum.Value.fromUnsignedBigInt(buyTaxFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyLiquidityFee",
      ethereum.Value.fromUnsignedBigInt(buyLiquidityFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyBurnFee",
      ethereum.Value.fromUnsignedBigInt(buyBurnFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyMarketingFee",
      ethereum.Value.fromUnsignedBigInt(buyMarketingFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyCharityFee",
      ethereum.Value.fromUnsignedBigInt(buyCharityFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyStakingFee",
      ethereum.Value.fromUnsignedBigInt(buyStakingFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellTaxFee",
      ethereum.Value.fromUnsignedBigInt(sellTaxFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellLiquidityFee",
      ethereum.Value.fromUnsignedBigInt(sellLiquidityFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellBurnFee",
      ethereum.Value.fromUnsignedBigInt(sellBurnFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellMarketingFee",
      ethereum.Value.fromUnsignedBigInt(sellMarketingFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellCharityFee",
      ethereum.Value.fromUnsignedBigInt(sellCharityFee)
    )
  )
  purrUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellStakingFee",
      ethereum.Value.fromUnsignedBigInt(sellStakingFee)
    )
  )

  return purrUpdatedEvent
}

export function createSwapAndLiquifyEvent(
  tokensSwapped: BigInt,
  ethReceived: BigInt,
  tokensIntoLiqudity: BigInt,
  ethIntoLiquidity: BigInt,
  ethForMarketing: BigInt,
  ethForCharity: BigInt
): SwapAndLiquify {
  let swapAndLiquifyEvent = changetype<SwapAndLiquify>(newMockEvent())

  swapAndLiquifyEvent.parameters = new Array()

  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSwapped",
      ethereum.Value.fromUnsignedBigInt(tokensSwapped)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "ethReceived",
      ethereum.Value.fromUnsignedBigInt(ethReceived)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensIntoLiqudity",
      ethereum.Value.fromUnsignedBigInt(tokensIntoLiqudity)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "ethIntoLiquidity",
      ethereum.Value.fromUnsignedBigInt(ethIntoLiquidity)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "ethForMarketing",
      ethereum.Value.fromUnsignedBigInt(ethForMarketing)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "ethForCharity",
      ethereum.Value.fromUnsignedBigInt(ethForCharity)
    )
  )

  return swapAndLiquifyEvent
}

export function createSwapAndLiquifyEnabledUpdatedEvent(
  enabled: boolean
): SwapAndLiquifyEnabledUpdated {
  let swapAndLiquifyEnabledUpdatedEvent = changetype<
    SwapAndLiquifyEnabledUpdated
  >(newMockEvent())

  swapAndLiquifyEnabledUpdatedEvent.parameters = new Array()

  swapAndLiquifyEnabledUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return swapAndLiquifyEnabledUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
