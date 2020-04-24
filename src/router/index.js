import Vue from "vue";
import VueRouter from "vue-router";
import EventsList from "@/views/EventsList.vue";
import EventsCreate from "@/views/EventsCreate.vue";

Vue.use(VueRouter);

// EventsCreate.vue /events-create
// Setting up the routes
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
