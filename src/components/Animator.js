export default class Animator {
  constructor() {
    this.visitedSpeed = 10;
    this.shortestSpeed = 50;
  }
  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, this.visitedSpeed * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, this.visitedSpeed * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, this.shortestSpeed * i);
    }
  }

  updateSpeed(visitedSpeed, shortestSpeed) {
    this.visitedSpeed = visitedSpeed;
    this.shortestSpeed = shortestSpeed;
  }
}
