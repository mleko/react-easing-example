import {animate} from "react-easing/dist";
import {FloatingDiv} from "../FloatingDiv/index";

export const WrappedElement = animate({duration: 600, easing: "ease-in-out"})(FloatingDiv);
