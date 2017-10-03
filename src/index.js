import angular from "angular";
import "angular-ui-router";
import routes from "./routes";
import angDragDrop from "../node_modules/angular-native-dragdrop/index";
import cardComponent from "./components/card.component";
import "./index.scss";

angular
    .module("app", ["ui.router", "ang-drag-drop"])
    .config(routes)
    .component("cardComponent", cardComponent)
    ;
