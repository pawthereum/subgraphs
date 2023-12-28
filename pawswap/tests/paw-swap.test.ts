import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Buy } from "../generated/schema"
import { Buy as BuyEvent } from "../generated/PawSwap/PawSwap"
import { handleBuy } from "../src/paw-swap"
import { createBuyEvent } from "./paw-swap-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ethSpent = BigInt.fromI32(234)
    let tokensReceived = BigInt.fromI32(234)
    let customTaxAmount = BigInt.fromI32(234)
    let customTaxAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBuyEvent = createBuyEvent(
      buyer,
      tokenAddress,
      ethSpent,
      tokensReceived,
      customTaxAmount,
      customTaxAddress
    )
    handleBuy(newBuyEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Buy created and stored", () => {
    assert.entityCount("Buy", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ethSpent",
      "234"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokensReceived",
      "234"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "customTaxAmount",
      "234"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "customTaxAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
