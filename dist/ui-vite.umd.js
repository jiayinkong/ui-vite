(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.uiVite = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const HButton = vue.defineComponent({
    name: "HButton",
    render() {
      return vue.h("button", null, "MyButton");
    }
  });
  const _sfc_main = {
    name: "TButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "button template");
  }
  const TButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const JButton = vue.defineComponent({
    name: "JButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("jsx button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(HButton.name, HButton);
      app.component(TButton.name, TButton);
      app.component(JButton.name, JButton);
    }
  };
  exports2.HButton = HButton;
  exports2.JButton = JButton;
  exports2.TButton = TButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
