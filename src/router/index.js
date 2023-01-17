import Vue from "vue";
import VueRouter from "vue-router";

import listData from "../components/listData.vue";
import viewData from "../components/viewData.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    redirect: "/listData",
  },
  {
    path: "/list",
    name: "list",
    component: listData,
  },
  {
    path: "/view/:id",
    name: "view",
    component: viewData,
  }
];

export const router = new VueRouter({
  routes: routeList,
});