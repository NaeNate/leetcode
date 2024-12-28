function tribonacci(n: number): number {
    if (n === 0) return 0

    let a = 0, b = 1, c = 1
    let temp = 0;

    for (let i = 0; i < n - 2; i++) {
        temp = c
        
        c = c + b + a
        a = b
        b = temp
    }

    return c
}
