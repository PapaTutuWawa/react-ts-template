import * as React from "react";

export interface BasicProps { msg: string; }

export class Basic extends React.Component<BasicProps, {}> {
    render(): any {
        return <h1>React says: <b>{this.props.msg}</b></h1>
    }
}