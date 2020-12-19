import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import SelectedCharacter from 'components/SelectedCharacter';
import 'css/index.css';

const Index = () => {
    
    return(
        <SelectedCharacter>
            <App/>
        </SelectedCharacter>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));