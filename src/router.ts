import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./view/Home.vue";
import Doc from "./view/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import { h } from "vue";

const history = createWebHashHistory();
const md = (fileName) =>
  h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName });

export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "",
          redirect: "/doc/intro",
        },
        {
          path: "install",
          component: md("install"),
        },
        {
          path: "get-started",
          component: md("get-started"),
        },
        {
          path: "intro",
          component: md("intro"),
        },
        {
          path: "switch",
          component: SwitchDemo,
        },
        {
          path: "button",
          component: ButtonDemo,
        },
        {
          path: "dialog",
          component: DialogDemo,
        },
        {
          path: "tabs",
          component: TabsDemo,
        },
      ],
    },
  ],
});
