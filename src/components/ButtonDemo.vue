<template>
  <h1>基础用法</h1>
  <Demo :component="Button1Demo" />
  <h1>不同尺寸</h1>
  <Demo :component="Button2Demo" />
  <h1>不同颜色</h1>
  <Demo :component="Button3Demo" />
  <h1>禁用按钮</h1>
  <Demo :component="Button4Demo" />
  <h1>加载中</h1>
  <Demo :component="Button5Demo" />
  <Table>
    <tr>
      <td>theme</td>
      <td>按钮样式</td>
      <td>string</td>
      <td>link/text</td>
      <td>-</td>
    </tr>
    <tr>
      <td>size</td>
      <td>按钮大小</td>
      <td>string</td>
      <td>big/small</td>
      <td>-</td>
    </tr>
    <tr>
      <td>level</td>
      <td>按钮颜色</td>
      <td>string</td>
      <td>main/danger/warning/success</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>设置禁用样式</td>
      <td>Boolean</td>
      <td>true/false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>设置加载中样式</td>
      <td>Boolean</td>
      <td>true/false</td>
      <td>true</td>
    </tr>
  </Table>
</template>

<script>
import Table from "./Table.vue";
import Button1Demo from "./buttonDemo/Button1.demo.vue";
import Button2Demo from "./buttonDemo/Button2.demo.vue";
import Button3Demo from "./buttonDemo/Button3.demo.vue";
import Button4Demo from "./buttonDemo/Button4.demo.vue";
import Button5Demo from "./buttonDemo/Button5.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
    Table,
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