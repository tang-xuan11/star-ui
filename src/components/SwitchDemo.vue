<template>
  <div>
    <h1>基础用法</h1>
    <Demo :component="Switch1Demo" />
    <h1>支持禁用</h1>
    <Demo :component="Switch2Demo" />
    <Table>
      <tr>
        <td>value</td>
        <td>设置开关</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>设置禁用样式</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>-</td>
      </tr>
    </Table>
  </div>
</template>

<script lang="ts">
import Table from "./Table.vue";
import Demo from "./Demo.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
export default {
  components: {
    Demo,
    Table,
  },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>

<style lang="scss" scoped>
table td {
  padding: 15px;
  border-bottom: 1px solid #dcdfe6;
  color: #606266;
  @media (max-width: 500px) {
    padding: 4px;
    font-size: 14px;
  }
}
</style>