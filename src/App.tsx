import React from "react";
import "./App.scss";

type Props = {
    text?: string;
};

const App = ({text}: Props) => {
    return <div className="app"><h1 data-testid="app-title">{text}</h1></div>;
};
export default App;
