import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAWN from "vue-awesome-notifications"

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
