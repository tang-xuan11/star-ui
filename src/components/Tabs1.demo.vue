<demo>
常规使用
</demo>
<template>
   <Tabs v-model:selected="x">
    <Tab title="短标题">内容1</Tab>
    <Tab title="中--标--题">内容2</Tab>
    <Tab title="长----标----题">内容3</Tab>
  </Tabs>
</template>

<script>
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const x = ref("短标题");
    return { x };
  },
};
</script>