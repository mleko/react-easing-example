import * as React from "react";
import {animate} from "react-easing/dist";
import {FloatingDiv, Props} from "../FloatingDiv/index";

@animate({duration: 600, easing: "ease-in-out"})
export class AnnotatedElement extends React.Component<Props, void> {
	public render(): JSX.Element {
		return (<FloatingDiv {...this.props}/>);
	}
}
