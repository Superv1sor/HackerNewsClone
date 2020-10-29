import React, {useState} from 'react';


export default function Edit () {
    const [stylePath, setStylePath] = useState('/index.css')

    const handleButtonClick = () => {
        stylePath === '/index.css' ? setStylePath('/style2.css') : setStylePath('/index.css')

        const style = document.getElementById('style-edit');
        style.href = process.env.PUBLIC_URL+ stylePath;
    }

    return (
        <div>
            <button type="button" onClick={handleButtonClick}>Click to update stylesheet</button>
        </div>
    )
}

//https://stackoverflow.com/questions/48495706/in-react-how-to-change-css-files-linked-in-the-head-of-index-html

//https://react.semantic-ui.com/usage