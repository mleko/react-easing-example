import * as React from "react";
import {AnimationSamples} from "../AnimationSamples";
import {AnnotatedElement} from "../AnnotatedElement";
import {WrappedElement} from "../WrappedElement";

export class Examples extends React.Component<void, State> {

	constructor(props: void, context: any) {
		super(props, context);
		this.state = {
			annotated: 0,
			wrapped: 0
		};
	}

	public render(): JSX.Element {
		return (
			<div style={{textAlign: "center"}}>
				<WrappedElement x={this.state.wrapped} text="wrappedElement" onClick={this.switchWrapped}/>
				<AnnotatedElement x={this.state.annotated} text="annotatedElement" onClick={this.switchAnnotated}/>

				<h2>Example configurations</h2>
				<AnimationSamples/>
			</div>
		);

	}

	private switchAnnotated = () => {
		this.setState({annotated: this.state.annotated ? 0 : 100});
	};

	private switchWrapped = () => {
		this.setState({wrapped: this.state.wrapped ? 0 : 100});
	};
}

interface State {
	annotated?: number;
	wrapped?: number;
}
