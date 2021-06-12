import modules from '../store'

export default ({ store }) => {
  Object.keys(modules).forEach(ns => {
    console.log(`[registerModule]: ${ns}`)
    store.registerModule(ns, modules[ns])
  })
}
