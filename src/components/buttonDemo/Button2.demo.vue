<demo>
支持 size
</demo>
<template>
  <div class="wrapper">
    <Button size="big">大按钮</Button>
    <Button>中按钮</Button>
    <Button size="small">小按钮</Button>
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

<style lang="scss" scoped>
.wrapper{
  display: flex;
  align-items: flex-end;
}
</style>