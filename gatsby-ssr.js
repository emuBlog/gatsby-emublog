exports.onPreRenderHTML = function onPreRenderHTML({
  getHeadComponents,
  replaceHeadComponents,
}) {
  const headComponents = getHeadComponents();
  headComponents.sort((a, b) => {
    if (a.type === b.type || (a.type !== 'meta' && b.type !== 'meta')) {
      return 0;
    }

    if (a.type === 'meta') {
      return -1;
    } else if (b.type === 'meta') {
      return 1;
    }

    return 0;
  });

  replaceHeadComponents(headComponents);
};