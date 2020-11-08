<template>
  <h1>基础用法</h1>
  <Demo :component="Dialog1Demo" />
  <h1>快速使用</h1>
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
  },
};
</script>

