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
import Button1Demo from "./buttonDemo/Button1.demo.vue";
import Button2Demo from "./buttonDemo/Button2.demo.vue";
import Button3Demo from "./buttonDemo/Button3.demo.vue";
import Button4Demo from "./buttonDemo/Button4.demo.vue";
import Button5Demo from "./buttonDemo/Button5.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>

