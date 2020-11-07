<template>
  <div class="demo" @mouseenter="enter" @mouseleave="leave">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggle" theme="link" size="big">
        <svg class="icon" aria-hidden="true">
          <use
            :xlink:href="showCode === true ? '#icon-up' : '#icon-down'"
          ></use>
        </svg>
        <transition name="fade">
          <p v-if="show">{{ showCode ? "隐藏代码" : "显示代码" }}</p>
        </transition>
      </Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
import { computed, ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    component: {
      type: Object,
    },
  },
  setup(props) {
    const show = ref(false);
    const enter = () => {
      show.value = true;
    };
    const leave = () => {
      show.value = false;
    };
    const showCode = computed(() => {
      if (codeVisible.value === true) {
        return true;
      } else {
        return false;
      }
    });
    const html = computed(() =>
      Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      )
    );
    const codeVisible = ref(false);
    const toggle = () => {
      codeVisible.value = !codeVisible.value;
      show.value = true;
    };
    return { showCode, Prism, html, codeVisible, toggle, show, enter, leave };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  max-width: 1000px;
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    height: 49px;
    text-align: center;
    border-top: 1px dashed $border-color;
    > .star-button {
      width: 100%;
      color: #aaaaaa;
      &:hover {
        color: #40a9ff;
        background: #f9fafc;
      }
      > p {
        font-size: 16px;
        transition: all 0.3s;
        &.fade-enter-active {
          opacity: 0;
          transform: translateX(30px);
        }
        &.fade-enter-to {
          opacity: 1;
          transform: translateX(0px);
        }
        &.fade-leave-active {
          transform: translateX(30px);
        }
        &.fade-leave-to {
          opacity: 0;
          transform: translateX(30px);
        }
      }
      > svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>