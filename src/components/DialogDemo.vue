<template>
  <h1>基础用法</h1>
  <Demo :component="Dialog1Demo" />
  <h1>快速使用</h1>
  <Demo :component="Dialog2Demo" />
  <Table>
    <tr>
      <td>visible</td>
      <td>是否默认显示Dialog</td>
      <td>Boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closeOnClickOverlay</td>
      <td>点击遮罩层是否关闭Dialog</td>
      <td>Boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>ok</td>
      <td>点击ok调用函数</td>
      <td>function</td>
      <td>()=>{}</td>
      <td>-</td>
    </tr>
    <tr>
      <td>cancel</td>
      <td>点击cancel调用函数</td>
      <td>function</td>
      <td>()=>{}</td>
      <td>-</td>
    </tr>
  </Table>
</template>

<script lang="ts">
import Table from "./Table.vue";
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: { Demo, Table },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
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