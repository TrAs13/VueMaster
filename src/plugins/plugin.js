import { h } from "vue";
import colorDirective from "../directives/color";
import blurDirective from "../directives/blur";

export default {
  install: (app) => {
    app.directive("color", colorDirective);
    app.directive("blur", blurDirective);
    app.config.globalProperties.$filters = {
      numberFormat(value, currency = "") {
        return (
          ("" + value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + currency
        );
      },
    };
    app.component("TodoRenderButton", {
      data() {
        return {
          tag: "button",
          tags: ["button", "div", "h1", "span"],
        };
      },
      render() {
        return h(this.tag, {
          class: "btn btn-danger",
          innerHTML: "change Tag",
          onClick: this.changeTag,
        });
      },
      methods: {
        changeTag() {
          this.tag = this.tags[Math.floor(Math.random() * this.tags.length)];
        },
      },
    });
  },
};
