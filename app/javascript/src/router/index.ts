import VueRouter, { RouteConfig } from "vue-router";
import Vue from "vue";

import UserList from "../components/UserList.vue";
import Chart from "../components/Chart.vue";
import Heavy from "../components/Heavy.vue";
import MessageIndex from "../components/messages/Index.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/users",
    component: UserList,
  },
  {
    path: "/messages",
    component: MessageIndex,
    name: "message",
  },
  {
    path: "/chart",
    component: Chart,
    name: "chart",
  },
  {
    path: "/heavy",
    component: Heavy,
    name: "heavy",
  },
  {
    path: "*",
    component: UserList,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
