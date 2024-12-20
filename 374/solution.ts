function guessNumber(n: number): number {
    let lowest = 1
    let highest = n

    while (true) {
        const num = lowest + (highest - lowest) / 2
        const t = guess(num)

        if (t === -1) {
            highest = Math.floor(num)
        } else if (t === 1) {
            lowest = Math.ceil(num)
        } else {
            return num
        }
    }
}
