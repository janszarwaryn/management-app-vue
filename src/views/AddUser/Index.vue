<template lang="pug">
  div
    ft-loader(v-if="loading" fill center)

    .text--error(v-else-if="error") {{ error }}

    template(v-else)
      h1 Add user

      .grid
        .grid__col.grid__col--first
          ft-user-form(
            btn-text="Add user"
            @submit="payload => createUser({ avatar: newAvatar, ...payload })"
          )

        .grid__col.grid__col--last
          ft-change-user-avatar(@change="updateUserAvatar")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FtLoader from '@/components/FtLoader'
import { FtChangeUserAvatar } from '@/components/FtAvatar'
import FtUserForm from '@/views/partials/FtUserForm'

export default {
  name: 'AddUser',
  data () {
    return {
      newAvatar: null
    }
  },
  methods: {
    ...mapActions('users', ['createUser']),
    updateUserAvatar (avatar) {
      this.newAvatar = avatar
    }
  },
  computed: {
    ...mapGetters(['loading', 'error'])
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
