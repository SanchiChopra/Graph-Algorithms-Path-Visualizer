import Pathfinder from "./Pathfinder";
export default class DFS extends Pathfinder {
  static weighted = false;
  static _time = 25;
  static text = `Depth-first search works on unweighted graphs and does not
  guarantee the shortest path. This algorithm visits one node at a time. At
  each node it visits it selects an unvisited neighbor and moves to
  that node. It repeats this process until it reaches a node with no unvisited
  neighbors. It then backtracks to a node which has unvisited neighbors and
  moves forward down that path. It repeats this until all nodes that can
  be visited have been, or until it reaches the destination node.`;
  traverse(grid, startNode, endNode) {
    const unvisited = [];
    const visitedNodesInOrder = [];
    startNode.isVisted = true;
    startNode.previous = null;
    unvisited.push(startNode);
    visitedNodesInOrder.push(startNode);
    while (unvisited.length !== 0) {
      //console.log(unvisited);
      let currentNode = unvisited.pop();
      if (currentNode === endNode) return visitedNodesInOrder;
      currentNode.isVisited = true;
      visitedNodesInOrder.push(currentNode);
      let neighbors = this.getUnvisitedNeighbors(currentNode, grid);

      // Random neighbor selection
      /*let n = neighbors.length;
      for (let i = 0; i < n; i++) {
        let remove = Math.floor(Math.random() * neighbors.length);
        let neighbor = neighbors.splice(remove, 1)[0];*/

      for (const neighbor of neighbors) {
        neighbor.previous = currentNode;
        unvisited.push(neighbor);
      }
    }
    return visitedNodesInOrder;
  }
}
