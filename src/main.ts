import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Tang from "./components/tang.vue";
import Tang1 from "./components/tang1.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Tang,
    },
    {
      path: "/tang1",
      component: Tang1,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
