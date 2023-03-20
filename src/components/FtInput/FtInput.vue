<template lang="pug">
  .ft-input
    label.ft-input__label(
      :for="id"
      :class="[{ 'ft-input__label--error' : validError }]"
      v-show="!hideLabel"
      v-if="label"
    )
      | {{ label }} <slot name="label"></slot>

    .ft-input__field-container
      input.ft-input__field(
        :class="[{ 'ft-input__field--error' : validError }, { 'ft-input__field--disabled' : disabled }, { 'ft-input__field--icon' : showIcon } ]"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="localValue"
        :type="type"
        :disabled="disabled"
        @input="input"
        @change="change"
      )
      .ft-input__icon(v-if="showIcon")
        slot(name="icon")

    span.ft-input__msg(:class="{ 'ft-input__msg--error' : validError }" v-show="showErrorMessage")
      slot(name="error-message")
</template>

<script>
const validInputTypes = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'range',
  'color',
  'date',
  'time',
  'datetime',
  'datetime-local',
  'month',
  'week',
  'hidden'
]

export default {
  name: 'FtInput',
  data () {
    return {
      localValue: this.value
    }
  },
  props: {
    id: String,
    name: String,
    label: String,
    hideLabel: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Object],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    validError: {
      type: [Object, Boolean, String],
      default: false
    },
    placeholder: String,
    type: {
      type: String,
      default: 'text',
      validator: value => {
        if (value === 'radio' || value === 'checkbox') {
          console.error('Please, use different component for radio and checkbox types.')
          return false
        }
        return validInputTypes.includes(value)
      }
    }
  },
  watch: {
    value (value) {
      this.localValue = value
    }
  },
  methods: {
    input (event) {
      this.localValue = event.target.value
      this.$emit('input', this.localValue)
    },
    change (event) {
      this.localValue = event.target.value
      this.$emit('change', this.localValue)
    }
  },
  computed: {
    showErrorMessage () {
      return !!this.$slots['error-message'] && this.validError
    },
    showIcon () {
      return !!this.$slots['icon']
    }
  }
}
</script>

<style lang="scss" scoped>
.ft-input {
  position: relative;

  &__label {
    font-weight: 600;
    white-space: nowrap;
    margin-bottom: $space;
    width: max-content;

    &--error {
      color: $error;

      &:focus {
        color: $error;
      }
    }
  }

  &__icon {
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 14px;
    transform: translate3d(0, -50%, 0);
    fill: $light-text;
  }

  &__field-container {
    position: relative;
  }

  &__field {
    font-size: 15px;
    width: 100%;
    height: 34px;
    z-index: 1;
    position: relative;
    padding: 3px 12px;
    border: 2px solid $gray;
    border-radius: 5px;
    background-color: $gray;

    &::placeholder {
      font-weight: 600;
      color: $light-text;
    }

    &:focus {
      background-color: $white;

      &::placeholder {
        color: $dark-text;
      }
    }

    &--icon {
      padding-right: $base * 5;
    }

    &--disabled {
      background: $gray;
      cursor: default;
      pointer-events: none;
    }

    &--success {
      border-color: $accent;

      &:focus {
        border-color: $accent;
      }
    }

    &--error {
      border-color: $error;

      &:focus {
        border-color: $error;
      }
    }
  }

  &__msg {
    font-size: 0.85rem;

    &--error {
      color: $error;
    }
  }
}
</style>
