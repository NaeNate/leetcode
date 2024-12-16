const nearestExit = (maze: string[][], entrance: number[]): number => {
  const queue = []
  const visited = new Set()

  queue.push([...entrance, 0])
  visited.add(entrance.join("."))

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
      if (
        neighbor[0] < 0 ||
        neighbor[1] < 0 ||
        neighbor[0] > maze.length - 1 ||
        neighbor[1] > maze[0].length - 1
      ) {
        continue
      }

      if (maze[neighbor[0]][neighbor[1]] === "+") continue

      if (!visited.has(neighbor.join("."))) {
        if (
          neighbor[0] === 0 ||
          neighbor[0] === maze.length - 1 ||
          neighbor[1] === 0 ||
          neighbor[1] === maze[0].length - 1
        ) {
          console.log(neighbor)
          return steps + 1
        }

        queue.push([...neighbor, steps + 1])
        visited.add(neighbor.join("."))
      }
    }
  }

  return -1
}
