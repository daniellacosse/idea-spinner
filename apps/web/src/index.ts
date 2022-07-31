import App from "./App.vue";
import { createApp } from "vue";
import { createSpinnerStore } from "./Spinner";
import demoData from "./demo.json";

createApp(App)
  .use(
    createSpinnerStore({
      ...demoData,
      wheels: new Map(Object.entries(demoData.wheels)),
    })
  )
  .mount("#app");
