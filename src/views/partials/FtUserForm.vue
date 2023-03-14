<template lang="pug">
ft-section
  form.grid(novalidate)
    ft-input.grid__col.grid__col--first(
      type="text"
      name="firstName"
      id="firstName"
      label="First name"
      v-model.trim="localFirstName"
      :valid-error="$v.localFirstName.$error"
      @change="$v.localFirstName.$touch()"
    )
      template(slot="error-message")
        span(v-if="!$v.localFirstName.required") This field is required

    ft-input.grid__col.grid__col--last(
      type="text"
      name="lastName"
      id="lastName"
      label="Last name"
      v-model.trim="localLastName"
      :valid-error="$v.localLastName.$error"
      @change="$v.localLastName.$touch()"
    )
      template(slot="error-message")
        span(v-if="!$v.localLastName.required") This field is required

  template(slot="footer")
    ft-button(type="submit" variant="primary" @click="submit") {{ btnText }}
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import FtInput from '@/components/FtInput'
import FtSection from '@/components/FtSection'
import FtButton from '@/components/FtButton'

export default {
  name: 'FtUserForm',
  data () {
    return {
      localFirstName: '',
      localLastName: ''
    }
  },
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: 'Update Details'
    }
  },
  validations: {
    localFirstName: { required },
    localLastName: { required }
  },
  methods: {
    submit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$emit('submit', {
          firstName: this.localFirstName,
          lastName: this.localLastName
        })
      }
    }
  },
  mounted () {
    this.localFirstName = this.firstName
    this.localLastName = this.lastName
  },
  components: {
    FtSection,
    FtInput,
    FtButton
  }
}
</script>

<style lang="scss" scoped>
form {
  padding-top: 2rem
}
</style>
