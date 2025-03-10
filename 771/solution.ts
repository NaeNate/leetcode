const numJewelsInStones = (jewels: string, stones: string): number => {
    const s = stones.split("")
    const j = jewels.split("")
    
    return s.filter(stone => j.includes(stone)).length
}
