import React, {useContext} from 'react';
import {selectContext, photoContext} from 'components/SelectedCharacter';

const CharacterInfo = () => {

    const [selectedCharacter, setSelectedCharacter] = useContext(selectContext);
    const [selectedPhoto, ] = useContext(photoContext)

    return(
        <div className="char-info-wrapper">
            <div className="char-info-title">
                {selectedCharacter ? <h1>CHARACTER</h1> : <h1>Select a character</h1>}
            </div>
            {selectedCharacter ? (
                <div>
                    <div>
                        <img src={selectedPhoto} alt={selectedCharacter.name}></img>
                    </div>
                    <div>
                        <h3>Name</h3>
                        <p>{selectedCharacter.name}</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>{selectedCharacter.description}</p>
                    </div>
                    <button>Confirm</button>
                </div>
            ) : null }

        </div>
    )
}

export default CharacterInfo;