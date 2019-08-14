import { generateTree } from "./generateTree.js";
import { normalizeTheStandardTree } from "./normalizeTheStandardTree.js";
import { standardizeTheNormalizedTree } from "./standardizeTheNormalizedTree.js";

function onGenerateStandardTree() {
  let depth = document.getElementById("tree-depth").value;

  let standardTreeData;

  let t1 = performance.now();

  standardTreeData = generateTree(Number(depth));

  let t2 = performance.now();

  console.log(`Time taken for generating tree: ${t2 - t1} milliseconds`);

  console.log("Standard Tree: ");
  console.log(standardTreeData);
}

function onNormalizeTheStandardTree() {
  let depth = document.getElementById("standard-tree-depth").value;

  let standardTreeData = generateTree(Number(depth));

  let normalizedData;

  let t1 = performance.now();

  normalizedData = normalizeTheStandardTree(standardTreeData);

  let t2 = performance.now();

  console.log(`Time taken for normalizing the tree: ${t2 - t1} milliseconds`);

  console.log("Normalized Tree: ");
  console.log(normalizedData);

  console.log(`Number of items in tree: ${normalizedData.keys().length}`);
}

function onStandardizeTheNormalizedTree() {
  let standardTree;

  let depth = document.getElementById("tree-depth-1").value;

  let standardTreeData = generateTree(Number(depth));

  let normalizedData = normalizeTheStandardTree(standardTreeData);

  let t1 = performance.now();

  standardTree = standardizeTheNormalizedTree(normalizedData);

  let t2 = performance.now();

  console.log(
    `Time taken for forming the tree from normalized data: ${t2 -
      t1} milliseconds`
  );

  console.log("Standard Tree: ");
  console.log(standardTree);
}

document
  .getElementById("generateStandardTreeButton")
  .addEventListener("click", onGenerateStandardTree);
document
  .getElementById("generateNormalizedTreeButton")
  .addEventListener("click", onNormalizeTheStandardTree);
document
  .getElementById("formStandaradizedTreeButton")
  .addEventListener("click", onStandardizeTheNormalizedTree);
