import { Vue, Component, namespace, Watch } from 'nuxt-property-decorator'
import { IUser } from '../store/models/User'
import { namespace as userNamespace } from '../store/modules/user'

const UserNamespace = namespace(userNamespace)

console.log('namespace: ', UserNamespace, userNamespace)

@Component({
  async fetch(this: UserMixin) {
    await this.getUsersList()
  }
})
export default class UserMixin extends Vue {
  @UserNamespace.Action
  private readonly getUsersList!: () => Promise<IUser[]>

  @UserNamespace.Getter
  private readonly usersList!: IUser[]
}


