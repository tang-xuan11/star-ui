<template>
  <div>Tabs 的文档</div>
  <Demo :component="Tabs1Demo" />
</template>

<script>
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Tabs1Demo };
  },
};
</script>

