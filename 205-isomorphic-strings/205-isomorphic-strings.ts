function isIsomorphic(s: string, t: string): boolean {
  const dataMap = new Map<string, string>();
  const dataMap2 = new Map<string, string>();
  for (let index = 0; index < s.length; index++) {
    const letter = dataMap.get(t[index]);
    const letter2 = dataMap2.get(s[index]);
    if (!letter && !letter2) {
      dataMap.set(t[index], s[index]);
      dataMap2.set(s[index], t[index]);
    } else {
      console.log(letter);
      console.log(letter2);
      if (letter !== s[index]) return false;
      if (letter2 !== t[index]) return false;
    }
  }
  return true;
}
