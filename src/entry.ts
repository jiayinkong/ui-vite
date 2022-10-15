import HButton from "./button";
import TButton from "./SButton.vue";
import JButton from "./JSXButton";

export { HButton, TButton, JButton };

export default {
  install(app) {
    app.component(HButton.name, HButton);
    app.component(TButton.name, TButton);
    app.component(JButton.name, JButton);
  },
};
