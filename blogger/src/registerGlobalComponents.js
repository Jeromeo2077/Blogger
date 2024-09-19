export async function registerGlobalComponents(root) {
  // @ts-ignore
  const components = import.meta.glob('./components/globals/*.vue')
  for (const fileName in components) {
    const componentName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')
    const component = await import(`./components/globals/${componentName}.vue`)
    root.component(componentName, component.default)
  }
}