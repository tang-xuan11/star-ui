<template>
  <h1>基础用法</h1>
  <Demo :component="Tabs1Demo" />
  <Table>
    <tr>
      <td>selected</td>
      <td>默认选中</td>
      <td>string</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>title</td>
      <td>标题</td>
      <td>string</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </Table>
</template>

<script>
import Table from "./Table.vue";
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
export default {
  components: {
    Demo,
    Table,
  },
  setup() {
    return { Tabs1Demo };
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