function romanToInt(s: string): number {
  const toNumber = {
    ['I']: 1,
    ['V']: 5,
    ['X']: 10,
    ['L']: 50,
    ['C']: 100,
    ['D']: 500,
    ['M']: 1000,
  };
  const string = s.split('').map((a) => toNumber[a]);
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    const cur = string[i];
    const next = string[i + 1] ?? 0;
    if (cur < next) res -= cur;
    else res += cur;
  }
  return res;
}
