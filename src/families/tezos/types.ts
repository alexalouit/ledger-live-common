import type { BigNumber } from "bignumber.js";
import type {
  TransactionCommon,
  TransactionCommonRaw,
} from "../../types/transaction";

export type TezosResources = {
  revealed: boolean;
  counter: number;
};

export type TezosResourcesRaw = {
  revealed: boolean;
  counter: number;
};

export type TezosOperationMode = "send" | "delegate" | "undelegate";

export type NetworkInfo = {
  family: "tezos";
  fees: BigNumber;
};
export type NetworkInfoRaw = {
  family: "tezos";
  fees: string;
};
// TODO add a field for indicating if staking
export type Transaction = TransactionCommon & {
  family: "tezos";
  mode: TezosOperationMode;
  networkInfo: NetworkInfo | null | undefined;
  fees: BigNumber | null | undefined;
  gasLimit: BigNumber | null | undefined;
  storageLimit: BigNumber | null | undefined;
  estimatedFees: BigNumber | null | undefined;
  taquitoError: string | null | undefined;
};
export type TransactionRaw = TransactionCommonRaw & {
  family: "tezos";
  mode: TezosOperationMode;
  networkInfo: NetworkInfoRaw | null | undefined;
  fees: string | null | undefined;
  gasLimit: string | null | undefined;
  storageLimit: string | null | undefined;
  estimatedFees: string | null | undefined;
  taquitoError: string | null | undefined;
};
