import React, {useState, useEffect, useContext} from 'react';
import {selectContext, photoContext} from 'components/SelectedCharacter';


const Character = (props) =>{

    const [characterDetail, setCharacterDetail] = useState({})
    const [photo, setPhoto] = useState('')
    const [, setSelectedCharacter] = useContext(selectContext);
    const [, setSelectedPhoto] = useContext(photoContext)

    useEffect(() => {
        setCharacterDetail(props.characterDetail);
        setPhoto(`${props.characterDetail.thumbnail.path}/portrait_small.jpg`)
    },[])

    const handleClick = () => {
        setSelectedCharacter(characterDetail);
        const selectedPhotoURL = `${props.characterDetail.thumbnail.path}/portrait_medium.jpg`;
        setSelectedPhoto(selectedPhotoURL);
    }

    return(
        <div className="character" onClick={handleClick}>
            <img className="char-img" src={photo} alt={characterDetail.name} ></img>
            <p className="char-name">{characterDetail.name}</p>
        </div>
    )

}

export default Character;