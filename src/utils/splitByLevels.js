function splitByLevels(children, levels) {
  const splittedChildren = {}
  children.forEach((child) => {
    if (child.level in splittedChildren) {
      splittedChildren[child.level].push(child)
    } else {
      splittedChildren[child.level] = []
      splittedChildren[child.level].push(child)
    }
  })
  const result = []
  for ( let category in splittedChildren ) {
    const level = levels.find((level) => {
      return level.level === Number(category)
    })
    result.push({
      level: category,
      name: level.name,
      objects: splittedChildren[category]
    })
  }
  return result
};

export default splitByLevels;