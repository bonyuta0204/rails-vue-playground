import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import * as Sentry from "@sentry/vue";

import { BrowserTracing } from "@sentry/tracing";

import VueCompositionAPI from "@vue/composition-api";
import { initializeApp } from "firebase/app";
import router from "../src/router";
import store from "../src/store";
import App from "../App.vue";

import HighchartsVue from "highcharts-vue";

Vue.use(HighchartsVue);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueCompositionAPI);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Sentry.init({
  Vue,
  dsn: "https://c01dd0c782cd44a09f951de424346573@o1209044.ingest.sentry.io/6342430",
  logErrors: true,

  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

document.addEventListener("DOMContentLoaded", () => {
  const config = document.querySelector<HTMLDivElement>(
    "script[name=config]"
  )?.dataset;

  if (!config) throw new Error("Failed to Load Config");

  const firebaseConfig = config.firebase && JSON.parse(config.firebase);

  if (!firebaseConfig) throw new Error("Failed to Load Firebase Config");

  const firebase = initializeApp(firebaseConfig);

  Vue.prototype.$firebase = firebase;

  new Vue({
    components: { App },
    template: "<App/>",
    render: (h) => h(App),
    store,
    router,
  }).$mount("#app");
});
