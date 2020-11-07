<demo>
一键打开 Dialog
</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容1",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
        closeOnClickOverlay: true,
      });
    };
    return { showDialog };
  },
};
</script>
