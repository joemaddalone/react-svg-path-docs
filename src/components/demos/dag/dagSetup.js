import dagre from "dagre";
import ELK from "elkjs/lib/elk.bundled";

const setupDag = async (dir = "DOWN", algo = "layered") => {
  const elk = new ELK();
  const elkNodes = [];
  const elkLinks = [];
  const items = "abcdefghijklmnopqrstuvwxyz".split("");
  items.forEach((item) => {
    elkNodes.push({ id: item, width: 25, height: 25 });
  });
  items.forEach((item, index, arr) => {
    if (index === 0) {
      return;
    }
    
    if (index < 5) {
      elkLinks.push({ id: index, source: "a", target: item });
    } else if (index < 9) {
      elkLinks.push({ id: index, source: "b", target: item });
    } else if (index < 15) {
      elkLinks.push({ id: index, source: "c", target: item });
    } else if (index < 19) {
      elkLinks.push({ id: index, source: "d", target: item });
    } else {
      elkLinks.push({ id: index, source: "e", target: item });
    }
  });

  const elkGraph = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": algo,
      separateConnectedComponents: true,
      "elk.direction": dir,
      "spacing.nodeNode": 35,
      'elk.stress.desiredEdgeLength': 100.0,
      'elk.stress.dimension': 'X',
      'elk.layered.spacing.edgeNodeBetweenLayers': 5,
    },
    children: elkNodes,
    edges: elkLinks,
  };

  return await elk.layout(elkGraph);
};

export default setupDag;
