<template lang="pug">
  div

    ft-loader(v-if="loading" fill center)

    .text--error(v-else-if="error") {{ error }}

    template(v-else)
      h1 User list

      ft-section(header-two-columns)
        template(slot="header")
          ft-input(
            slot="right"
            placeholder="Search for users..."
            :value="query"
            @input="filter"
          )
            font-awesome-icon(slot="icon" :icon="loop")

          ft-button.add-user-btn(
            slot="left"
            variant="primary"
            rounded
            @click="goToAddUser"
          )
            font-awesome-icon.add-user-btn__icon(:icon="userPlus")
            span.add-user-btn__text Add user

        template(v-if="users.length")
          ft-table(:headers="headers")
            tr(v-for="user in users" :key="user.id")
              td.cell--avatar
                vue-clazy-load(v-if="user.avatar" :src="user.avatar")
                  ft-avatar(:src="user.avatar" radius="50" size="40")
                  template(slot="placeholder")
                    ft-loader(center)
                ft-avatar(v-else radius="50" size="40")

              td
                strong {{ user.first_name }} {{ user.last_name }}

              td.cell--actions
                ft-button(
                  size="small"
                  variant="transparent"
                  aria-label="Edit user"
                  @click="gotToUser(user.id)"
                )
                  font-awesome-icon(:icon="edit" size="lg")

                ft-button(
                  size="small"
                  variant="transparent"
                  aria-label="Remove user"
                  @click="tryToRemoveUser(user.id)"
                )
                  font-awesome-icon(:icon="trash" size="lg")

        template(v-else)
          h1 There are no users, yet.
          p Would you like to add the first user?
          ft-button(
            variant="primary"
            size="large"
            rounded
            @click="goToAddUser"
          ) Add the user

      ft-pagination(
        v-if="totalPages && users.length"
        :total-pages="totalPages"
        :active-page="pageNumber"
        @currentPage="pageNum => fetchUsers(pageNum)"
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { VueClazyLoad } from 'vue-clazy-load'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faTrash, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import FtLoader from '@/components/FtLoader'
import FtSection from '@/components/FtSection'
import FtTable from '@/components/FtTable'
import FtAvatar from '@/components/FtAvatar'
import FtInput from '@/components/FtInput'
import FtButton from '@/components/FtButton'
import FtPagination from '@/components/FtPagination'

export default {
  name: 'Users',
  data () {
    return {
      headers: ['', 'Full name', 'Action'],
      query: '',
      loop: faSearch,
      trash: faTrash,
      edit: faEdit,
      userPlus: faUserPlus
    }
  },
  methods: {
    ...mapActions('users', ['fetchUsers', 'editUser', 'removeUser']),
    filter (query) {
      this.query = query.toLowerCase()
      console.log('filter', this.query)
    },
    tryToRemoveUser (userId) {
      const decision = confirm('Are your shure?')
      if (decision) this.removeUser(userId)
    },
    goToAddUser () {
      this.$router.push({ name: 'AddUser' })
    },
    gotToUser (userId) {
      this.$router.push({ name: 'EditUser', params: { userId } })
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      error: 'error',
      users: 'users/users',
      pageNumber: 'pagination/pageNumber',
      totalPages: 'pagination/totalPages'
    })
    // That could be used to filter users by name, but as you can see it doesn't respect pagination.
    // filteredUsers () {
    //   return this.users.filter(user => {
    //     const fullname = user.first_name + ' ' + user.last_name
    //     return fullname.toLowerCase().includes(this.query)
    //   })
    // }
  },
  created () {
    this.fetchUsers(this.pageNumber)
  },
  components: {
    FontAwesomeIcon,
    VueClazyLoad,
    FtLoader,
    FtInput,
    FtSection,
    FtTable,
    FtAvatar,
    FtButton,
    FtPagination
  }
}
</script>

<style lang="scss" scoped>
svg {
  color: $light-text
}

.cell {
  padding: $space;

  &--avatar {
    width: 50px;

    @include screen(min-tablet) {
      width: 130px
    }
  }

  &--actions {
    width: 50px;

    @include screen(min-tablet) {
      width: 110px
    }
  }
}

.add-user-btn {
  position: fixed;
  right: $space;
  bottom: $space;
  z-index: 99;
  box-shadow: $box-shadow;

  @include screen(min-tablet) {
    position: relative;
    right: auto;
    bottom: auto;
    box-shadow: 0;
  }

  &__text {
    display: none;

    @include screen(min-tablet) {
      display: inline
    }
  }

  &__icon {

    @include screen(min-tablet) {
      display: none
    }
  }
}
</style>
