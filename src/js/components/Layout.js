import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Sora513",
            title: "Hello World!"
        }
    }
    render() {
        setTimeout(
            () => { this.setState({ name: "Kokubo" }) }
            , 1000
        )
        return (
            <div>
                <Header title={this.state.title} />
                <h1>It's {this.state.name}!</h1>
                <Footer />
            </div>
        );
    }
}