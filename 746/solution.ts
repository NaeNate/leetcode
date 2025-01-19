const minCostClimbingStairs = (cost: number[]): number => {
    const memo = []

    const dp = (i) => {
        if (i < 2) return cost[i]
        if (memo[i] !== undefined) return memo[i]

        return memo[i] = cost[i] + Math.min(dp(i - 1), dp(i - 2))
    }

    return Math.min(dp(cost.length - 1), dp(cost.length - 2))
}
