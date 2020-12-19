import React from 'react';
import Character from 'components/Character';

class Characters extends React.Component {

    render() {
        return(
            <div className="char-wrapper">
                {this.props.characters.map(p=>{
                    return(
                        <div className="char" key={p.id}>
                            <Character characterDetail={p}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Characters;
