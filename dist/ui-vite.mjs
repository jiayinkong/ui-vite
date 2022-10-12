import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const HButton = defineComponent({
  name: "HButton",
  render() {
    return h("button", null, "MyButton");
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
  return openBlock(), createElementBlock("button", null, "button template");
}
const TButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JButton = defineComponent({
  name: "JButton",
  render() {
    return createVNode("button", null, [createTextVNode("jsx button")]);
  }
});
const entry = {
  install(app) {
    app.component(HButton.name, HButton);
    app.component(TButton.name, TButton);
    app.component(JButton.name, JButton);
  }
};
export {
  HButton,
  JButton,
  TButton,
  entry as default
};
