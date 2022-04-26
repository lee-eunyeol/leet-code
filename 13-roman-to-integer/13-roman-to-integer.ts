interface Lengthwise {
  length: number;
}

const CONVERSION_MAP = new Map<string, number>([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
Object.freeze(CONVERSION_MAP);

const isRomanNumeral = (roman: string): boolean => {
  return roman.match(/[IVXLCDM]/g)?.length === roman.length;
};

const romanToInt = (roman: string): number => {
  if (!roman || !isRomanNumeral(roman)) return 0;

  let sum = 0;
  const getLastIndex = <T extends Lengthwise>(t: T): number => t.length - 1;
  for (let idx = 0; idx < getLastIndex(roman); idx++) {
    const [romanChar1, romanChar2] = [roman.charAt(idx), roman.charAt(idx + 1)];
    const backValue: number = CONVERSION_MAP.get(romanChar1)!;
    const frontValue: number = CONVERSION_MAP.get(romanChar2)!;

    if (backValue < frontValue) {
      sum -= backValue;
    } else {
      sum += backValue;
    }
  }
  sum += CONVERSION_MAP.get(roman.charAt(getLastIndex(roman)))!;
  return sum;
};