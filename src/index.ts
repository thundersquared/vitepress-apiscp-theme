import Theme from "vitepress/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { h } from "vue";
import {
  Card,
  CardGroup,
  Check,
  Error,
  Info,
  Note,
  NoteHeading,
  Tip,
  Warning,
} from "./components";
import "./styles/index.css";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-before": () => h(NoteHeading),
    });
  },
  enhanceApp(ctx: any) {
    library.add(fas);
    ctx.app.component("FontAwesomeIcon", FontAwesomeIcon);
    ctx.app.component("CardGroup", CardGroup);
    ctx.app.component("Card", Card);
    ctx.app.component("Tip", Tip);
    ctx.app.component("Info", Info);
    ctx.app.component("Check", Check);
    ctx.app.component("Error", Error);
    ctx.app.component("Note", Note);
    ctx.app.component("Warning", Warning);
  },
};
