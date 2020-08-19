/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MockAggregatorDaiInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorDai extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorDai;
  attach(addressOrName: string): MockAggregatorDai;
  deployed(): Promise<MockAggregatorDai>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorDai;
  once(event: EventFilter | string, listener: Listener): MockAggregatorDai;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockAggregatorDai;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorDai;
  removeListener(eventName: any, listener: Listener): MockAggregatorDai;

  interface: MockAggregatorDaiInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}