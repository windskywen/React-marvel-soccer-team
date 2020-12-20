import React, {useState,  useContext} from 'react';
import {selectContext, photoContext} from 'components/SelectedCharacter';
import 'css/characterInfo.css';

const CharacterInfo = (props) => {

    const [selectedCharacter, ] = useContext(selectContext);
    const [selectedPhoto, ] = useContext(photoContext) 
    const [, setIsConfirm] = useState(false)

    const handleClick = () => {
        // console.log('in CharacterInfo .... selectedPhoto',selectedPhoto)
        setIsConfirm(true);
        props.toConfirm(true)
    }

    return(
        <div className="char-info-wrapper">
            <div className="char-info-title">
                {selectedCharacter ? <h1>CHARACTER</h1> : <h1>Select a character</h1>}
            </div>
            { selectedCharacter ? (
                <div className="char-info-content">
                    <div className="char-info-img">
                        <img src={selectedPhoto} alt={selectedCharacter.name}></img>
                    </div>
                    <div className="char-info-detail">
                        <h3>Name</h3>
                        <p>{selectedCharacter.name}</p>
                        <h3>Description</h3>
                        <p>{selectedCharacter.description}</p>
                    </div>
                    <br/><br/>
                    <div className="char-info-btn-wrap">
                        {props.isPosition ? (
                            <button className="confirm-btn" onClick={handleClick}>Confirm</button>
                        ) : (
                            <h2>Choose a Team Position</h2>
                        )}
                    </div>
                </div>
            ) : null }

        </div>
    )
}

export default CharacterInfo;