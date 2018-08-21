/* eslint-disable */
export async function extractComponentMeta(name, ...rest) {
  try {
    const module = await import(`./components/${name}/usage`);
    return (module && module.default)? module.default: module;
  } catch (err) {
    console.log('extractComponentMeta:', err);
  }
  return null;
}
export async function extractComponent(name) {
  try {
    const module = await import(`./components/${name}`);
    return module && module.default ? module.default : module;
  } catch (err) {
    console.log('extractComponent:', err);
  }
  return null;
}
