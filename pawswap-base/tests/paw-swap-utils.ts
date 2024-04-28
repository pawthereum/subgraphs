import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Buy, OwnershipTransferred, Sell } from "../generated/PawSwap/PawSwap"

export function createBuyEvent(
  buyer: Address,
  tokenAddress: Address,
  ethSpent: BigInt,
  tokensReceived: BigInt,
  customTaxAmount: BigInt,
  customTaxAddress: Address
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "ethSpent",
      ethereum.Value.fromUnsignedBigInt(ethSpent)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensReceived",
      ethereum.Value.fromUnsignedBigInt(tokensReceived)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "customTaxAmount",
      ethereum.Value.fromUnsignedBigInt(customTaxAmount)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "customTaxAddress",
      ethereum.Value.fromAddress(customTaxAddress)
    )
  )

  return buyEvent
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

export function createSellEvent(
  seller: Address,
  tokenAddress: Address,
  tokensSold: BigInt,
  ethReceived: BigInt,
  customTaxAmount: BigInt,
  customTaxAddress: Address
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSold",
      ethereum.Value.fromUnsignedBigInt(tokensSold)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "ethReceived",
      ethereum.Value.fromUnsignedBigInt(ethReceived)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "customTaxAmount",
      ethereum.Value.fromUnsignedBigInt(customTaxAmount)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "customTaxAddress",
      ethereum.Value.fromAddress(customTaxAddress)
    )
  )

  return sellEvent
}
