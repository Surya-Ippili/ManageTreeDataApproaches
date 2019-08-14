export function normalizeTheStandardTree(treeData) {
  let normalizedData = {};
  normalizeTree(normalizedData, treeData, null);
  return normalizedData;
}

function normalizeTree(normalizedData, treeData, parentUid) {
  treeData.forEach(treeItem => {
    normalizedData[treeItem.uid] = { ...treeItem, parentUid };
    delete normalizedData[treeItem.uid].children;
    if (parentUid !== null) {
      if (!normalizedData[parentUid].childrenUids) {
        normalizedData[parentUid].childrenUids = [];
      }
      normalizedData[parentUid].childrenUids.push(treeItem.uid);
    }
    if (treeItem.children && treeItem.children.length > 0) {
      normalizeTree(normalizedData, treeItem.children, treeItem.uid);
    }
  });
}
