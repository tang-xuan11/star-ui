<template>
  <button class="star-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="star-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`star-theme-${theme}`]: theme,
        [`star-size-${size}`]: size,
        [`star-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$grey: grey;
$yellow: #e6a23c;
$green: #67c23a;
$radius: 4px;
.star-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 14px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.star-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.star-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.star-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.star-size-small {
    font-size: 16px;
    height: 32px;
    padding: 0 10px;
  }
  &.star-theme-button {
    &.star-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.star-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.star-level-warning {
      background: $yellow;
      border-color: $yellow;
      color: white;
      &:hover,
      &:focus {
        background: darken($yellow, 10%);
        border-color: darken($yellow, 10%);
      }
    }
    &.star-level-success {
      background: $green;
      border-color: $green;
      color: white;
      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }
  }
  &.star-theme-link {
    &.star-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.star-theme-text {
    &.star-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.star-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.star-level-warning {
      color: $yellow;
      &:hover,
      &:focus {
        color: darken($yellow, 10%);
      }
    }
    &.star-level-success {
      color: $green;
      &:hover,
      &:focus {
        color: darken($green, 10%);
      }
    }
  }
  &.star-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.star-theme-link,
  &.star-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .star-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: star-spin 1s infinite linear;
  }
}
@keyframes star-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>