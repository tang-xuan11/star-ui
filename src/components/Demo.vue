<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggle">查看代码</Button>
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
    };
    return { Prism, html, codeVisible, toggle };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
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
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
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