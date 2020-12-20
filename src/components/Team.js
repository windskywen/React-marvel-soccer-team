import React, { useState, useContext, useEffect } from 'react';
import { selectContext, photoContext } from 'components/SelectedCharacter';
import 'css/team.css';


const Team = (props) => {
    const photoDefaultPath = 'images/question2.jpg';
    const [selectedCharacter, ] = useContext(selectContext);
    const [selectedPhoto,] = useContext(photoContext)
    const [position, setPosition] = useState('')
    const [style, setStyle] = useState({
        position1: 'member',
        position2: 'member',
        position3: 'member',
        position4: 'member',
        position5: 'member',
        position6: 'member',
    })
    const [team, setTeam] = useState({
        "position1":{
            title: 'Goalkeeper(GK)',
            charName: '',
            photo: photoDefaultPath,
            status: 'undecided',
        },
        "position2":{
            title: 'Striker(ST)',
            charName: '',
            photo: photoDefaultPath,
            status: 'undecided',
        },
        "position3":{
            title: 'Midfielder(MD)',
            charName: '',
            photo: photoDefaultPath,
            status: 'undecided'
        },
        "position4":{
            title: 'Defender(DF)',
            charName: '',
            photo: photoDefaultPath,
            status: 'undecided'
        },
        "position5":{
            title: '',
            charName: '',
            photo: photoDefaultPath,
            status: 'undecided'
        },
        "position6":{
            title: '',
            charName: '',
            photo: photoDefaultPath,
            status: 'undecided'
        },
    })

    useEffect(() =>{
        if(props.isConfirm){
            setTeam(prevState => {
                return{ ...prevState, 
                    [position]:{
                        ...prevState,
                        charName: selectedCharacter.name,
                        photo: selectedPhoto,
                        status: 'decided'
                    }
                }
            });
            props.switchConfirm();
        }
    }, [props.isConfirm]);

    const toSelectPosition = (e) => {
        setPosition(e.currentTarget.id);
        props.choosePosition(true)
        styleDefault();
        changeStyle(e.currentTarget.id);
    }

    const styleDefault = () => {
        setStyle(() => {
            Object.keys(style).forEach((key) => {
                style[key] = 'member';
            })
            return style
        })
    }

    const changeStyle = (id) => {
        setStyle((prevStyle) => {
            return{
                ...prevStyle,
                [id]: "member-choose"  
            }
        })
    }

    return (
        <div className="team-wrapper">
            <h1>Marvel Soccer Team</h1>
            <div className="member-wrapper">
                <div className={style.position1} id="position1" onClick={toSelectPosition}>
                    <div className="member-header">
                        <h3>Position:</h3>
                        <p>Goalkeeper(GK)</p>
                    </div>
                    <div className="member-photo">
                        <img src={team.position1.photo} alt='position1'></img>
                        <div className="member-charName">
                            { team.position1.charName ? <h4>{team.position1.charName}</h4> : null}
                        </div>
                    </div>
                </div>
                <div className={style.position2} id="position2" onClick={toSelectPosition}>
                    <div className="member-header">
                        <h3>Position:</h3>
                        <p>Striker(ST)</p>
                    </div>
                    <div className="member-photo">
                        <img src={team.position2.photo} alt='position2'></img>
                        <div className="member-charName">
                            { team.position2.charName ? <h4>{team.position2.charName}</h4> : null}
                        </div>
                    </div>
                </div>
                <div className={style.position3} id="position3" onClick={toSelectPosition}>
                    <div className="member-header">
                        <h3>Position:</h3>
                        <p>Midfielder(MD)</p>
                    </div>
                    <div className="member-photo">
                        <img src={team.position3.photo} alt='position3'></img>
                        <div className="member-charName">
                            { team.position3.charName ? <h4>{team.position3.charName}</h4> : null}
                        </div>
                    </div>
                </div>
                <div className={style.position4} id="position4" onClick={toSelectPosition}>
                    <div className="member-header">
                        <h3>Position:</h3>
                        <p>Defender(DF)</p>
                    </div>
                    <div className="member-photo">
                        <img src={team.position4.photo} alt='position4'></img>
                        <div className="member-charName">
                            { team.position4.charName ? <h4>{team.position4.charName}</h4> : null}
                        </div>
                    </div>
                </div>
                <div className={style.position5} id="position5" onClick={toSelectPosition}>
                    <div className="member-header">
                        <h3>Position:</h3>
                        <select>
                            <option>Striker (ST)</option>
                            <option>Midfielder (MD)</option>
                            <option>Defender (DF)</option>
                        </select>
                    </div>
                    <div className="member-photo">
                        <img src={team.position5.photo} alt='position5'></img>
                        <div className="member-charName">
                            { team.position5.charName ? <h4>{team.position5.charName}</h4> : null}
                        </div>
                    </div>
                </div>
                <div className={style.position6} id="position6" onClick={toSelectPosition}>
                    <div className="member-header">
                        <h3>Position:</h3>
                        <select>
                            <option>Striker (ST)</option>
                            <option>Midfielder (MD)</option>
                            <option>Defender (DF)</option>
                        </select>
                    </div>
                    <div className="member-photo">
                        <img src={team.position6.photo} alt='position6'></img>
                        <div className="member-charName">
                            { team.position6.charName ? <h4>{team.position6.charName}</h4> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;