<demo>
常规使用
</demo>
<template>
  <Button>你好</Button>
  <Button @click="onClick">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>

<style lang="sass" scoped>
</style>