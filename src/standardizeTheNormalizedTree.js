export function standardizeTheNormalizedTree(normalizedData) {
  let tree = [];
  for (let uid in normalizedData) {
    if (normalizedData[uid]) {
      let treeItem = normalizedData[uid];

      treeItem.children = getChildren(treeItem, normalizedData);

      delete treeItem.childrenUids;

      tree.push(treeItem);

      delete normalizedData[uid];
    }
  }
  return tree;
}

function getChildren(treeItem, normalizedData) {
  let children = [];

  if (
    normalizedData[treeItem.uid] &&
    normalizedData[treeItem.uid].childrenUids &&
    normalizedData[treeItem.uid].childrenUids.length > 0
  ) {
    normalizedData[treeItem.uid].childrenUids.forEach(childUid => {
      let treeItem = normalizedData[childUid];

      treeItem.children = getChildren(treeItem, normalizedData);

      delete treeItem.childrenUids;

      children.push(treeItem);

      delete normalizedData[childUid];
    });
  }

  return children;
}
