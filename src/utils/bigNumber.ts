/* eslint-disable no-console */
import BigNumber from 'bignumber.js';
import { currencyformatter } from "@/utils/currency-helpers";

export const BN_PRECISION = 7;
const DEFAULT_BN = 0;

BigNumber.config({
  EXPONENTIAL_AT: [-20, 20],
});

export type TConvertableUnitAmount = BigNumber | number | string;

function isBigNumber(value: TConvertableUnitAmount): value is BigNumber {
  return value instanceof BigNumber;
}

function toBigNumber(value: TConvertableUnitAmount): BigNumber {
  return isBigNumber(value) ? value : new BigNumber(String(value || DEFAULT_BN));
}

const [decimalSeparator = '.', groupSeparator = ',', groupSize = '3']: string[] = (() => {
  const numberWithGroupAndDecimalSeparator = 10000.1;

  return currencyformatter.formatToParts?.(numberWithGroupAndDecimalSeparator).reduce(
    (acc, part, idx, original) => {
      if (part.type === 'decimal') {
        acc[0] = part.value;
      }

      if (part.type === 'group') {
        acc[1] = part.value;
        acc[2] = String(original[idx - 1].value.length + 1);
      }

      return acc;
    },
    ['.', ',', '3'],
  );
})();

const BN_FORMAT: BigNumber.Format = {
  decimalSeparator,
  groupSeparator,
  groupSize: Number(groupSize),
};

const UINT_256_DECIMAL_PLACES = -18;

/**
 * Get a pretty print version of the number
 */
export function getBigNumberCurrencyLabel(
  value: TConvertableUnitAmount,
  isUInt256 = false,
  precision = BN_PRECISION,
  skipTrailing = true,
): string {
  let bgNumber = toBigNumber(value);

  if (isUInt256) {
    bgNumber = bgNumber.shiftedBy(UINT_256_DECIMAL_PLACES);
  }

  if (bgNumber.isNaN()) {
    return String(value);
  }

  const trailed = skipTrailing ? bgNumber.decimalPlaces(precision, BigNumber.ROUND_DOWN) : bgNumber;

  return trailed.toFormat(BN_FORMAT);
}

export function uint256ToBNBCurrency(value: string | number): string {
  return new BigNumber(value).shiftedBy(UINT_256_DECIMAL_PLACES).toFixed(2);
}

export function uint256ToDecimalBn(value: string | number): BigNumber {
  return new BigNumber(value).shiftedBy(UINT_256_DECIMAL_PLACES);
}
