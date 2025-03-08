const minimumRecolors = (blocks: string, k: number): number => {
    let minimum = Infinity
    const window = []

    for (let i = 0; i < blocks.length; i++) {
        window.push(blocks[i])

        if (window.length >= k) {
            let count = 0

            for (const char of window) {
                if (char === "W") {
                    count += 1
                }
            }

            minimum = Math.min(minimum, count)
            window.shift()
        }
    }

    return minimum
}
