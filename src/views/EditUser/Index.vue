<template lang="pug">
div
  ft-loader(v-if="loading" fill center)

  .text--error(v-else-if="error") {{ error }}

  template(v-else-if="user")
    h1 Edit user

    .grid
      .grid__col.grid__col--first
        ft-user-form(
          :first-name="user.first_name"
          :last-name="user.last_name"
          @submit="payload => updateUser({ id: user.id, avatar: newAvatar, ...payload })"
        )

      .grid__col.grid__col--last
        ft-change-user-avatar(:avatar="user.avatar" @change="updateUserAvatar")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FtLoader from '@/components/FtLoader'
import { FtChangeUserAvatar } from '@/components/FtAvatar'
import FtUserForm from '@/views/partials/FtUserForm'

export default {
  name: 'EditUser',
  data () {
    return {
      newAvatar: null
    }
  },
  methods: {
    ...mapActions('users', [ 'fetchUser', 'updateUser' ]),
    updateUserAvatar (avatar) {
      this.newAvatar = avatar
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      error: 'error',
      user: 'users/user'
    })
  },
  mounted () {
    const params = this.$router.history.current.params
    if ('userId' in params) this.fetchUser(params.userId)
  },
  components: {
    FtUserForm,
    FtLoader,
    FtChangeUserAvatar
  }
}
</script>

<style lang="scss">
</style>
