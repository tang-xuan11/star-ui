<template>
<h1>
    导航 |
    <router-link to="/">Group1</router-link> |
    <router-link to="/tang1">Group2</router-link>
</h1>
<hr />
<router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>
