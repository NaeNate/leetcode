const countBits = (n: number): number[] => {
    const ans = []

    for (let i = 0; i < n + 1; i++) {
        let b = i.toString(2).split("")

        ans.push(b.filter(x => x === "1").length)
    }

    return ans
}
