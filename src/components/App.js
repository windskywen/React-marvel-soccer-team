import React, { useState, useEffect } from 'react';
import Team from 'components/Team';
import Characters from 'components/Characters';
import CharacterInfo from 'components/CharacterInfo';

const App = () => {

    const [charaters, setCharacters] = useState([]);
    const [isPosition, setIsPosition] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false)
    
    useEffect(() => {
        const url = 'https://gateway.marvel.com/v1/public/characters';
        const publicKey = 'ebb24eee9732d99ed30aae1b015da585';
        const privateKey = '812fc960b4876b17373345edec7171c138938a21';
        const ts = (new Date().getTime()).toString();
        const md5 = require('md5');
        const hash = md5(ts + privateKey + publicKey);
        const finalURL = `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        const fetchData = async () => {
            const response = await fetch(finalURL, 
                {
                    method: "GET", 
                    params:{
                        "apikey": publicKey,
                        "ts": ts,
                        "hash": hash
                    },
                }
            );
            const dataSource = await response.json();
            setCharacters(dataSource.data.results)
            // console.log('fethcing........')
        }
        
        fetchData();
    }, [])

    const choosePosition = (bool) => {
        if(bool){
            setIsPosition(true);
        }
    }

    const toConfirm = (bool) => {
        setIsConfirm(bool);
    }

    const switchConfirm = () => {
        setIsConfirm(!isConfirm);
    }

    return (
        <div className="wrapper">
            <Team choosePosition={choosePosition} isConfirm={isConfirm} switchConfirm={switchConfirm}/>
            <div className='content'>
                <Characters characters={charaters}/>
                <CharacterInfo isPosition={isPosition} toConfirm={toConfirm}/>
            </div>
        </div>
    )
}

export default App;