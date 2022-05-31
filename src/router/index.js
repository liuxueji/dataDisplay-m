import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Area from "../views/Area/index"
import Citys from "../views/Citys/index"
import Hesuan from "../views/Hesuan/index"
import Prevention from "../views/Prevention/index"
import Travel from "../views/Travel/index"
import Select from "../views/Select/select"

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
}, {
  path: "/area",
  name: "Area",
  component: Area
}, {
  path: "/citys/:cityname",
  name: "Citys",
  component: Citys,
  props: true
}, {
  path: "/hesuan",
  name: "Hesuan",
  component: Hesuan
}, {
  path: "/prevention",
  name: "Prevention",
  component: Prevention
}, {
  path: "/travel",
  name: "Travel",
  component: Travel
}, {
  path: "/select",
  name: "Select",
  component: Select
}];

const router = new VueRouter({
  routes,
});

export default router;