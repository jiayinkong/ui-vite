var uiVite = function(exports, vue) {
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
  exports.HButton = HButton;
  exports.JButton = JButton;
  exports.TButton = TButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
