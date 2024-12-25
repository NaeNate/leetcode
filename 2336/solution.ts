class SmallestInfiniteSet {
    gone

    constructor() {
        this.gone = []
    }

    popSmallest(): number {
        let x = 1

        if (this.gone.length) {
            let index = 1

            while (true) {
                if (!this.gone.includes(index)) {
                    x = index
                    break
                }

                index += 1
            }
        }

        this.gone.push(x)
        return x
    }

    addBack(num: number): void {
        const index = this.gone.indexOf(num)

        if (index !== -1) {
            this.gone.splice(index, 1)
        }
    }
}

