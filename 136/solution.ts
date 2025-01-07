const singleNumber = (nums: number[]): number => {
    let val

    for (const num of nums) {
        val ^= num
    }
    
    return val
}
