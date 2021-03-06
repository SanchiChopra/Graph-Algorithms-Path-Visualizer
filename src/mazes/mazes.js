/* Generates a maze of random walls. */
export function randomWalls(grid) {
  for (let row = 0; row < 19; row++) {
    for (let col = 0; col < 49; col++) {
      let decider = Math.random();
      if (
        (decider <= 0.1 || decider >= 0.85) &&
        (!grid.grid[row][col].isStart && !grid.grid[row][col].isEnd)
      ) {
        grid.toggleWall(row, col);
      }
    }
  }
}

/* The below methods are used to generate a maze with
the recursive dvision method.*/
export function recursiveDivision(grid) {
  addInnerWalls(grid, true, 1, 47, 1, 17);
  addOuterWalls(grid, 49, 19);
}

function addOuterWalls(grid, width, height) {
  for (var i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
      for (var j = 0; j < width; j++) {
        if (!grid.grid[i][j].isWall) grid.toggleWall(i, j);
      }
    } else {
      if (!grid.grid[i][0].isWall) grid.toggleWall(i, 0);
      if (!grid.grid[i][width - 1].isWall) grid.toggleWall(i, width - 1);
    }
  }
}

function addInnerWalls(grid, h, minX, maxX, minY, maxY) {
  if (h) {
    if (maxX - minX < 2) {
      return;
    }

    var y = Math.floor(randomNumber(minY, maxY) / 2) * 2;
    addHWall(grid, minX, maxX, y);

    addInnerWalls(grid, !h, minX, maxX, minY, y - 1);
    addInnerWalls(grid, !h, minX, maxX, y + 1, maxY);
  } else {
    if (maxY - minY < 2) {
      return;
    }

    var x = Math.floor(randomNumber(minX, maxX) / 2) * 2;
    addVWall(grid, minY, maxY, x);

    addInnerWalls(grid, !h, minX, x - 1, minY, maxY);
    addInnerWalls(grid, !h, x + 1, maxX, minY, maxY);
  }
}

function addHWall(grid, minX, maxX, y) {
  var hole = Math.floor(randomNumber(minX, maxX) / 2) * 2 + 1;
  var hole2 = Math.floor(randomNumber(minX, maxX) / 2) * 2 + 1;
  for (var i = minX; i <= maxX; i++) {
    if (i === hole || i === hole2) continue;
    grid.toggleWall(y, i);
  }
}

function addVWall(grid, minY, maxY, x) {
  var hole = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;
  var hole2 = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;
  for (var i = minY; i <= maxY; i++) {
    if (i === hole || i === hole2) continue;
    grid.toggleWall(i, x);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
