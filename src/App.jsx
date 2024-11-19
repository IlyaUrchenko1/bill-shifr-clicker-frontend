import { useState } from "react";
import "./App.css";

function App() {
    const [clickCount, setClickCount] = useState(0);

    const imageBase64 = "data:image/jpeg;base64,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"
    // Обработчик клика
    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="container">
            <h2>Количество кликов: {clickCount}</h2>
            <img
                src={imageBase64} // Замени на ссылку на свою картинку
                alt="Кнопка"
                style={{ cursor: "pointer", border: "1px solid #ccc", borderRadius: "10px" }}
                onClick={handleClick}
            />
        </div>
    );
}

export default App;