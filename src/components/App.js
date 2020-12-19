import React, { useState, useEffect } from 'react';
import Team from 'components/Team';
import Characters from 'components/Characters';
import CharacterInfo from 'components/CharacterInfo';



const App = () => {

    const [charaters, setCharacters] = useState([]);
    
    useEffect(() => {
        const url = 'https://gateway.marvel.com/v1/public/characters';
        const publicKey = 'ebb24eee9732d99ed30aae1b015da585';
        const privateKey = '812fc960b4876b17373345edec7171c138938a21';
        let ts = (new Date().getTime()).toString();
        const md5 = require('md5');
        const hash = md5(ts + privateKey + publicKey);
        const finalURL = `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        console.log(finalURL);

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
            console.log(dataSource);
            setCharacters(dataSource.data.results)
            console.log('fethcing........')
        }
        
        fetchData();
    }, [])

    // async componentDidMount(){
    //     const url = 'https://gateway.marvel.com/v1/public/characters';
    //     const publicKey = '8e468501e4dd63cd221651da91de57b6';
    //     const privateKey = '30374f24ef127034e4c997463e283c68c081d27f';
    //     let ts = (new Date().getTime()).toString();
    //     const md5 = require('md5');
    //     const hash = md5(ts + privateKey + publicKey);
    //     const finalURL = `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    //     console.log(finalURL);

    //     const response = await fetch(finalURL, 
    //         {
    //             method: "GET", 
    //             params:{
    //                 "apikey": publicKey,
    //                 "ts": ts,
    //                 "hash": hash
    //             },
    //         }
    //     );
    //     const dataSource = await response.json();
    //     console.log(dataSource);

    //     this.setState({
    //         characters: dataSource.data.results
    //     })
    // }

    return (
        <div className="wrapper">
            <Team/>
            <div className='content'>
                <Characters characters={charaters}/>
                <CharacterInfo/>
            </div>
        </div>
    )
}

export default App;