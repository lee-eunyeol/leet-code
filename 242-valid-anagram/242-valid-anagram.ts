function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();
  if(s.length !== t.length) return false
  for (const Sstring of s) {
    map.set(Sstring, (map.get(Sstring) ?? 0) + 1);
  }

  for (const Tstring of t) {
    if (!map.has(Tstring)) return false;

    const item = map.get(Tstring);
    if (item === 1) {
      map.delete(Tstring);
    } else {
      map.set(Tstring, item - 1);
    }
  }
  return true
}
