<demo>
支持 level
</demo>
<template>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="success">成功按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../../lib/index";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="sass" scoped>
</style>