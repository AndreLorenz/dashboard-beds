import angular from "angular";
import "angular-ui-router";
import routes from "./routes";

import cardComponent from "./components/card.component";
import "./index.scss";

angular
    .module("app", ["ui.router"])
    .config(routes)
    .component("cardComponent", cardComponent)
    ;
