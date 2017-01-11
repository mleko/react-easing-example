import "es6-shim";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Examples} from "./components/Examples/index";

class SampleComponent extends React.Component<void, void> {
	public render(): JSX.Element {
		return (
			<div>
				<Examples/>
			</div>
		);
	}
}

// Render a simple React component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(<SampleComponent/>, element);
