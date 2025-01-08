const calcEquation = (equations: string[][], values: number[], queries: string[][]): number[] => {
    const graph = {}
    const q = []

    for (let i = 0; i < equations.length; i++) {
        const [num, den] = equations[i]
        const value = values[i]

        if (!graph[num]) graph[num] = []
        if (!graph[den]) graph[den] = []

        graph[num].push({ node: den, weight: value })
        graph[den].push({ node: num, weight: 1 / value })
    }

    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i]

        if (!graph[start] || !graph[end]) {
            q.push(-1)
            continue
        }

        if (start === end) {
            q.push(1)
            continue
        }

        const visited = []
        let flag = false

        const search = (node, product) => {
            if (visited.includes(node)) return
            visited.push(node)

            if (node === end) {
                q.push(product)
                flag = true
                return
            }

            for (const edge of graph[node]) {
                search(edge.node, product * edge.weight)
            }
        }

        search(start, 1)
        if (!flag) q.push(-1)
    }

    return q
}
