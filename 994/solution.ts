const orangesRotting = (grid: number[][]): number => {
  const queue = []
  const visited = new Set()

  let highest = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0])
        visited.add([i, j].join("."))
      }
    }
  }

  while (queue.length > 0) {
    const cell = queue.shift()

    const row = cell[0]
    const col = cell[1]
    const steps = cell[2]

    const neighbors = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]

    for (const neighbor of neighbors) {
      const row = neighbor[0]
      const col = neighbor[1]

      if (
        row < 0 ||
        col < 0 ||
        row > grid.length - 1 ||
        col > grid[0].length - 1
      ) {
        continue
      }

      if (grid[row][col] === 0) continue

      if (!visited.has(neighbor.join("."))) {
        queue.push([...neighbor, steps + 1])
        visited.add(neighbor.join("."))

        highest = Math.max(highest, steps + 1)
        grid[row][col] = 2
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }

  return highest
}
