import product, { namespace as productNamespace } from './modules/product'
import user, { namespace as userNamespace } from './modules/user'

export default {
  [productNamespace]: product(),
  [userNamespace]: user()
}
