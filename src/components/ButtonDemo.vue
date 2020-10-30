<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例1</h1>
  <div>
    <Button size="big">大按钮</Button>
    <Button>中按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button size="big" theme="link">大按钮</Button>
    <Button theme="link">中按钮</Button>
    <Button size="small" theme="link">小按钮</Button>
  </div>
  <div>
    <Button size="big" theme="text">大按钮</Button>
    <Button theme="text">中按钮</Button>
    <Button size="small" theme="text">小按钮</Button>
  </div>
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

<style lang="scss" scoped>
</style>