import { Vue, Component, namespace, Watch } from 'nuxt-property-decorator'
import { IUser } from '../store/models/User'
import { namespace as userNamespace } from '../store/modules/user'

const UserNamespace = namespace(userNamespace)

@Component({
  async fetch(this: UserMixin) {
    const id = this.getUserId()
    const user = await this.getUserById(id)
    this.user = JSON.parse(JSON.stringify(user))
  }
})
export default class UserMixin extends Vue {
  @UserNamespace.Action
  private readonly getUserById!: (id: number) => Promise<IUser>

  @UserNamespace.Getter
  private readonly currentUser!: IUser

  public user: IUser | null = null

  private getUserId(): number {
    const [id] = this.$route.path.split('/').reverse()
    return Number(id)
  }
}


