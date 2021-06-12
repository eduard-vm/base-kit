import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { IProduct } from '../store/models/Product'
import { namespace as productStore } from '../store/modules/product'

const ProductStore = namespace(productStore)

@Component({
  async fetch(this: ProductMixin) {
    console.log('ProductMixin: @fetch')
    // await this.getProduct('product1')
  }
})
export default class ProductMixin extends Vue {
  // @ProductStore.Action
  // public readonly getProduct!: (slug: string) => Promise<IProduct | null>

  // @ProductStore.Getter
  // public readonly currentProduct!: null | IProduct

  public product: IProduct | null = null

  get productName() {
    return this.product ? this.product.name : ''
  }
}


