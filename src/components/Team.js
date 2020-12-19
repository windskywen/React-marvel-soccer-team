import React, {useContext} from 'react';
import {selectContext, photoContext} from 'components/SelectedCharacter';


const Team = () => {
    
    const [selectedCharacter, setSelectedCharacter] = useContext(selectContext);
    const [selectedPhoto, ] = useContext(photoContext)

    return(
        <div className="team-wrapper">
            <h1>Your Team Members</h1>
            <div className="member-wrapper">
                <div className="member" id="position1">
                    <div className="member-header">
                        <h3>Title:</h3>
                        <select disabled={true}>
                            <option>GK</option>
                        </select>
                    </div>
                    <div className="member-photo">
                        photo
                    </div>
                </div>
                <div className="member" id="position2">
                    <h3>Title</h3>
                    <select disabled={true}>
                        <option>GK</option>
                    </select>
                </div>
                <div className="member" id="position3">
                    <h3>Title</h3>
                    <select disabled={true}>
                        <option>GK</option>
                    </select>
                </div>
                <div className="member" id="position4">
                    <h3>Title</h3>
                    <select disabled={true}>
                        <option>GK</option>
                    </select>
                </div>
                <div className="member" id="position1">
                    <h3>Title</h3>
                    <select disabled={true}>
                        <option>GK</option>
                    </select>
                </div>
                <div className="member" id="position5">
                    <h3>Title</h3>
                    <select disabled={true}>
                        <option>GK</option>
                    </select>
                </div>
                <div className="member" id="position6">
                    <h3>Title</h3>
                    <select disabled={true}>
                        <option>GK</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Team;