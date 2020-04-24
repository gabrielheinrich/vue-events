import Vue from "vue";
import VueRouter from "vue-router";
import EventsList from "@/views/EventsList.vue";
import EventsCreate from "@/views/EventsCreate.vue";
import EventsShow from "@/views/EventsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "events-list",
    component: EventsList
  },
  {
    path: "/events-create",
    name: "events-create",
    component: EventsCreate
  },
  {
    path: "/event/:id",
    name: "events-show",
    component: EventsShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
