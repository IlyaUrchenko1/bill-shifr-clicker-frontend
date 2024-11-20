import { useState } from "react";
import "./App.css";
import ClickButton from "./components/button/click_button/click_button.jsx";
import Header from "./components/header/header.jsx";

function App() {

    return (
        <div>
            <Header />
            <ClickButton />
        </div>
    );
}

export default App;
