import React, { useState } from 'react';

export const selectContext = React.createContext();
export const photoContext = React.createContext();


const SelectedCharacter = ({children}) => {

    const [selectedCharacter, setSelectedCharacter] = useState()
    const [selectedPhoto, setSelectedPhoto] = useState('images/question.png')


    return(
        <selectContext.Provider value={[selectedCharacter, setSelectedCharacter]}>
            <photoContext.Provider value={[selectedPhoto, setSelectedPhoto]}>
                     {children}
            </photoContext.Provider>
        </selectContext.Provider>
    )
}

export default SelectedCharacter;