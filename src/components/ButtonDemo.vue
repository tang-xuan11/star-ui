<template>
  <h1>示例1</h1>
  <Demo :component="Button1Demo" />
  <h1>示例2</h1>
  <Demo :component="Button2Demo" />
  <h1>示例3</h1>
  <Demo :component="Button3Demo" />
  <h1>示例4</h1>
  <Demo :component="Button4Demo" />
  <h1>示例5</h1>
  <Demo :component="Button5Demo" />
</template>

<script>
import Button from "../lib/Button.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return {
      onClick,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>