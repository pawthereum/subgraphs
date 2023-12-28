import {
  Transfer as TransferEvent
} from "../generated/Pawthereum/Pawthereum"
import {
  TokensIntoAddress,
  TokensOutOfAddress,
  Transfer
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let tokensIntoAddressEntity = TokensIntoAddress.load(event.params.to)
  if (tokensIntoAddressEntity == null) {
    tokensIntoAddressEntity = new TokensIntoAddress(event.params.to)
    tokensIntoAddressEntity.value = BigInt.fromI32(0)
  }
  tokensIntoAddressEntity.value = tokensIntoAddressEntity.value.plus(event.params.value)
  tokensIntoAddressEntity.save()

  let tokensOutOfAddressEntity = TokensOutOfAddress.load(event.params.from)
  if (tokensOutOfAddressEntity == null) {
    tokensOutOfAddressEntity = new TokensOutOfAddress(event.params.from)
    tokensOutOfAddressEntity.value = BigInt.fromI32(0)
  }
  tokensOutOfAddressEntity.value = tokensOutOfAddressEntity.value.plus(event.params.value)
  tokensOutOfAddressEntity.save()
}
