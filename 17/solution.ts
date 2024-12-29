function letterCombinations(digits: string): string[] {
  let possible = []
  const letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  }

  while (digits.length) {
    const x = []

    if (!possible.length) {
      for (const letter of letters[digits[0]]) {
        x.push(letter)
      }
    } else {
      for (const p of possible) {
        for (const letter of letters[digits[0]]) {
          x.push(p + letter)
        }
      }
    }

    possible = x
    digits = digits.slice(1)
  }

  return possible
}
