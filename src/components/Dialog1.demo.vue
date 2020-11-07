<demo>
常规使用
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>内容1</strong>
      <div>内容2</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Dialog } from "../lib/index";
import { Button } from "../lib/index";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};

    return { x, toggle, f1, f2 };
  },
};
</script>