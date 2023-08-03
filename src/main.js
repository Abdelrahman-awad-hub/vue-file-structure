import "./assets/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/base.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
import "./assets/js/all.js";
