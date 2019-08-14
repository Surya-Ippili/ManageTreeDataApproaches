import faker from "faker";

export function generateTree(depth) {
  let tree = getList(4);
  for (let i = tree.length - 1; i >= 0; i--) {
    tree[i].children = [];
    addChildren(tree[i], depth);
  }
  return tree;
}

function getRandomItem() {
  return {
    employeeName: faker.name.findName(),
    jobDescription: faker.name.jobDescriptor(),
    jobType: faker.name.jobType(),
    uid: faker.random.uuid(),
    someRelatedUids: getRelatedUids()
  };
}

function addChildren(item, depth) {
  let children = getList();
  for (let index = children.length - 1; index > 0; index--) {
    item.children.push(children[index]);
  }
  if (depth >= 0) {
    for (let j = item.children.length - 1; j >= 0; j--) {
      item.children[j].children = [];
      addChildren(item.children[j], --depth);
    }
  }
}

function getRelatedUids() {
  let uids = [];
  for (let i = 0; i < faker.random.number({ min: 0, max: 5 }); i++) {
    uids.push(faker.random.uuid());
  }
  return uids;
}

function getList(numberOfItems) {
  let list = [];
  for (let i = 0; i < numberOfItems ? numberOfItems : 4; i++) {
    list.push(getRandomItem());
  }
  return list;
}
