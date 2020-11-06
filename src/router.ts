import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./view/Home.vue";
import Doc from "./view/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import Intro from './markdown/intro.md'
import Install from './markdown/install.md'
import GetStarted from './markdown/get-started.md'
import { h } from "vue";

const history = createWebHashHistory();
const md = (string) =>
  h(Markdown, { content: string, key: string });

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
          component: md(Install),
        },
        {
          path: "get-started",
          component: md(GetStarted),
        },
        {
          path: "intro",
          component: md(Intro),
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
