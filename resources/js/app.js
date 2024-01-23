import "./bootstrap";
import { createApp } from "vue";
import app from "../../vue/src/App.vue";

createApp(app).mount("#app");
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();
