/*
Implementation of Dijkstra's algorithm in JavaScript.
*/
import Pathfinder from "./Pathfinder";

export default class Dijkstra extends Pathfinder {
  static weighted = true;
  static text = `Dijkstra's shortest path algorithm works on weighted graphs and
guarantees the shortest path. This algorithm works similarly to breadth-first
search in that it begins at the start node and then works it's way outward in
all directions. As it works outwards it checks the edges (u,v,w) to see if
u.distance + w is less than v.distance. If so it updates v.distance to hold
u.distance + w. It continues this process until no more nodes can be visited,
or until the destination node is found.`;

  traverse(grid, startNode, endNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    startNode.weight = 0;
    const unvisited = this.getAllNodes(grid);

    while (unvisited.length !== 0) {
      this.sortNodesByDistance(unvisited);
      const closestNode = unvisited.shift();
      // If the closest node is at a distance of infinity,
      // we must be trapped and should therefore stop.
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === endNode) return visitedNodesInOrder;
      let neighbors = this.getUnvisitedNeighbors(closestNode, grid);
      for (const neighbor of neighbors) {
        let newDistance = closestNode.distance + neighbor.weight;
        if (newDistance < neighbor.distance) {
          neighbor.distance = newDistance;
          neighbor.previous = closestNode;
        }
      }
    }
  }

  sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }
}
