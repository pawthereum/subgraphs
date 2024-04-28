import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  OwnershipTransferred,
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

export function createSwapAndLiquifyEvent(
  tokensSwapped: BigInt,
  ethReceived: BigInt,
  tokensIntoLiqudity: BigInt
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
