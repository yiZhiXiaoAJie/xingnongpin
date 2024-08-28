import { createSSRApp } from "vue";
import './static/font/iconfont.css'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
