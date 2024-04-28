import {
  Buy as BuyEvent,
  Sell as SellEvent
} from "../generated/PawSwap/PawSwap"
import { Buy, Donation, Sell, TokenDonationTally } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.buyer = event.params.buyer
  entity.tokenAddress = event.params.tokenAddress
  entity.ethSpent = event.params.ethSpent
  entity.tokensReceived = event.params.tokensReceived
  entity.customTaxAmount = event.params.customTaxAmount
  entity.customTaxAddress = event.params.customTaxAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  if (entity.customTaxAmount.gt(BigInt.fromI32(0))) {
    // save a new donation entity
    let donationEntity = new Donation(event.transaction.hash.concatI32(event.logIndex.toI32()))
    donationEntity.donor = event.params.buyer
    donationEntity.tokenSwapped = event.params.tokenAddress
    donationEntity.donationAmount = event.params.customTaxAmount
    donationEntity.donationSwapRatio = entity.ethSpent.div(entity.customTaxAmount)
    donationEntity.donationRecipient = event.params.customTaxAddress
    donationEntity.blockNumber = event.block.number
    donationEntity.blockTimestamp = event.block.timestamp
    donationEntity.transactionHash = event.transaction.hash
    donationEntity.save()

    let tokenDonationTally = TokenDonationTally.load(event.params.tokenAddress)
    // if there is not yet a tokenDonationTally for this token, create one
    if (tokenDonationTally == null) {
      tokenDonationTally = new TokenDonationTally(event.params.tokenAddress)
      tokenDonationTally.totalDonated = BigInt.fromI32(0)
      tokenDonationTally.totalSwapped = BigInt.fromI32(0)
      tokenDonationTally.donationSwapRatio = BigInt.fromI32(0)
      tokenDonationTally.save()
    }
    // increment the donationAmount for this token
    tokenDonationTally.totalDonated = tokenDonationTally.totalDonated.plus(event.params.customTaxAmount)
    tokenDonationTally.totalSwapped = tokenDonationTally.totalSwapped.plus(event.params.ethSpent)
    tokenDonationTally.donationSwapRatio = tokenDonationTally.totalSwapped.div(tokenDonationTally.totalDonated)
    tokenDonationTally.save()
  }
}

export function handleSell(event: SellEvent): void {
  let entity = new Sell(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.tokenAddress = event.params.tokenAddress
  entity.tokensSold = event.params.tokensSold
  entity.ethReceived = event.params.ethReceived
  entity.customTaxAmount = event.params.customTaxAmount
  entity.customTaxAddress = event.params.customTaxAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()


  if (entity.customTaxAmount.gt(BigInt.fromI32(0))) {
    // save a new donation entity
    let donationEntity = new Donation(event.transaction.hash.concatI32(event.logIndex.toI32()))
    donationEntity.donor = event.params.seller
    donationEntity.tokenSwapped = event.params.tokenAddress
    donationEntity.donationAmount = event.params.customTaxAmount
    donationEntity.donationRecipient = event.params.customTaxAddress
    donationEntity.donationSwapRatio = entity.ethReceived.div(entity.customTaxAmount)
    donationEntity.blockNumber = event.block.number
    donationEntity.blockTimestamp = event.block.timestamp
    donationEntity.transactionHash = event.transaction.hash
    donationEntity.save()

    let tokenDonationTally = TokenDonationTally.load(event.params.tokenAddress)
    // if there is not yet a tokenDonationTally for this token, create one
    if (tokenDonationTally == null) {
      tokenDonationTally = new TokenDonationTally(event.params.tokenAddress)
      tokenDonationTally.totalDonated = BigInt.fromI32(0)
      tokenDonationTally.totalSwapped = BigInt.fromI32(0)
      tokenDonationTally.donationSwapRatio = BigInt.fromI32(0)
      tokenDonationTally.save()
    }
    // increment the donationAmount for this token
    tokenDonationTally.totalDonated = tokenDonationTally.totalDonated.plus(event.params.customTaxAmount)
    tokenDonationTally.totalSwapped = tokenDonationTally.totalSwapped.plus(event.params.ethReceived)
    tokenDonationTally.donationSwapRatio = tokenDonationTally.totalSwapped.div(tokenDonationTally.totalDonated)
    tokenDonationTally.save()
  }
}
