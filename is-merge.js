function isMerge(finalString, stringOne, stringTwo) {
  if (s.length !== part1.length + part2.length) return false;

  if (!s) return !part1 && !part2;

  return (
    (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
    (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1)))
  );
}

console.log(isMerge('codewars', 'code', 'wars')); // true
console.log(isMerge('Makingprogress', 'Makpross', 'inggre')); // true
