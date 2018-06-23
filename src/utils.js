export async function extractComponentMeta(name, ...rest) {
  try {
    const module = await import('./components/' + name + '.usage');
    return module.usage(rest);
  } catch (err) {
    console.log(err);
  }
}
export async function extractComponent(name) {
  try {
    const module = await import('./components/' + name);
    return module.default || module;
  } catch (err) {
    console.log(err);
  }
}
