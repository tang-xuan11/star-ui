<template>
  <div class="content">
    <h1 id="attributes">Attributes</h1>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#attributes {
  color: #1f2f3d;
  margin: 50px 0 25px;
}
.content {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 25px;
}
table {
  font-size: 16px;
}
table th {
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid #dcdfe6;
  color: #909399;
  @media (max-width: 500px) {
    padding: 4px 0;
    min-width: 100px;
  }
}
table {
  @media (max-width: 500px) {
    width: 100%;
    overflow-x: auto;
  }
}
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