import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [randomColor, setRandomColor] = useState('#000000');

    const generateRandomColor = () => {
        const hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        setRandomColor(generateRandomColor());
    }, []);


    return (
        <div>
            <h1 style={{transition: 'all 1s linear', color: generateRandomColor()}}>Hello World</h1>
            <h2 style={{transition: 'all 1s linear', color: generateRandomColor()}}>My Name is Raditya</h2>
            <h3 style={{transition: 'all 1s linear', color: generateRandomColor()}}>I am a handsome/pretty human being</h3>
            <h4 style={{transition: 'all 1s linear', color: generateRandomColor()}}>I love to learn JavaScript</h4>
            <p id='p1' style={{transition: 'all 1s linear', color: generateRandomColor()}}>I am a super high quality student</p>
            <p id='p2' style={{transition: 'all 1s linear', color: generateRandomColor()}}>I am going to be a super star</p>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)