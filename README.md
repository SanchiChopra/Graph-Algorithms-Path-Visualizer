# Path Algorithm Visualizer

![Gif of Dijkstra's with walls](https://github.com/agrant16/path-algorithm-visualizer/blob/master/path-visualizer-gif.gif)

- An older version of the application, but still a good demo.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is built using React.js and Bootstrap through react-bootstrap.

## Currently Implemented Algorithms

- [Dijkstra's Shortest Path](https://en.wikipedia.org/w/index.php?title=Special:Search&search=Dijkstra%27s+algorithm)
- [Bellman-Ford](https://en.wikipedia.org/wiki/Bellman–Ford_algorithm)
- [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search)

## How to Use the App

A live demo of the application can be found [here](http://agrant16.github.io/path-algorithm-visualizer).
This app is best viewed and used on screens with a width of 1300px or larger.
It is a simple React.js app and is not built to be responsive.

### Selecting an Algorithm and Running the Visualizer

You can select a path algorithm using the Algorithms dropdown menu from the navbar.
The starting node for the algorithm is represented by the green node on the graph and the end node is represented by the red node.
You can alter the positions of the starting and ending nodes, by clicking and dragging them.
Any changes to the starting and ending node's locations will persist until the "Clear Board" button is pressed.
Once an algorithm is selected you can visualize the algorithm by pressing the "Visualize It!" button.
Doing so will change the color of nodes on the graph in the order they are visited.
Once the end node is reached the shortest path will be displayed in yellow.
Buttons will be disabled for the majority of the animation process.

### Weighted Graphs and Non-Weighted Graphs

The app will automatically generate edge weights for algorithms that are meant for weighted graphs.
These edge weights represent the distance to travel to that node from its neighbors, and are displayed in the center of each node.
In the case of this app neighbors are considered to be those nodes directly next to the current node in the four main directions: up, down, left, right.
If the algorithm does not need these weights none will be generated, and a "0" will be displayed.

### Building Walls

You can build walls to eliminate some nodes from the graph.
To do so simply click on a node in the graph and it will change colors to black, signifying that it is now a wall.
You can click your mouse, hold it and drag it in order to create larger walls.
Clicking, or dragging your cursor over, existing walls will turn those walls back to normal nodes.  
Any walls built will persist through algorithm changes, weight changes, and visualizations.
To remove walls you will need to use the "Clear Board" button.

### Generating Mazes

Currently there are two maze algorithms implement: random walls and the recursive division.
The random walls method generates a random number in the range [0, 1) for each node.
Based on this number the node is transformed to a wall.
The recursive division method follows the basic [recursive division algorithm](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method) with one difference.
The difference is that instead of generating a single passage in each wall here we generate multiple.
This allows for mulitple paths between the start and end node instead of just a single path.

### Changing Speed

This setting adjusts the animation speed of the app.
There are three settings: "Slow", "Average", and "Fast."
The default setting is "Fast."
