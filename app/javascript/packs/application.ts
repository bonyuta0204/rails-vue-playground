import Vue from "vue";
import App from "../App.vue";
import store from "../src/store";
import router from "../src/router";
import { logger } from '@sentry/utils';

import * as Sentry from "@sentry/vue";

import { BrowserTracing } from "@sentry/tracing";

import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);

Sentry.init({
  Vue,
  dsn: "https://c01dd0c782cd44a09f951de424346573@o1209044.ingest.sentry.io/6342430",

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
  logger.enable()
  new Vue({
    components: { App },
    template: "<App/>",
    render: (h) => h(App),
    store,
    router,
  }).$mount("#app");
});
