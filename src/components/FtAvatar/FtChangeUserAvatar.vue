<template lang="pug">
ft-section(center-content)
  ft-avatar(:src="localAvatar" size="140" radius="50")

  template(slot="footer")
    .text--error(v-if="error") Please provide an URL to your avatar

    ft-button(type="submit" block @click="change")
      font-awesome-icon(:icon="camera" size="lg")
      | Change Photo
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import FtSection from '@/components/FtSection'
import FtButton from '@/components/FtButton'
import FtInput from '@/components/FtInput'
import FtAvatar from './/FtAvatar'

export default {
  name: 'FtChangeUserAvatar',
  data () {
    return {
      camera: faCamera,
      error: null,
      localAvatar: null
    }
  },
  props: {
    avatar: {
      type: String,
      default: null
    }
  },
  methods: {
    setError (error) {
      this.error = error
    },
    isUrlValid (str) {
      const pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i')

      return !!pattern.test(str)
    },
    change () {
      const msg = 'Please provide a valid URL to your avatar'
      const url = prompt(msg)

      this.setError(null)

      if (this.isUrlValid(url)) this.localAvatar = url
      else this.setError(msg)

      this.$emit('change', this.localAvatar)
    }
  },
  mounted () {
    this.localAvatar = this.avatar
  },
  components: {
    FontAwesomeIcon,
    FtAvatar,
    FtSection,
    FtInput,
    FtButton
  }
}
</script>

<style lang="scss" scoped>
svg {
  margin-right: $space / 2;
  margin-left: $space / 2
}
</style>
