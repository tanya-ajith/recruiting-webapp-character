import './custom.css'
import SkillCheck from './skill/SkillCheck'
import ChrAttribute from './character/ChrAttribute'
import ChrSkill from './character/ChrSkill'
import ChrClassReqs from './character/ChrClassReqs'
import ChrClass from './character/ChrClass'
import { useState } from 'react'

const Character = ({ character }) => {
    const [attributeList, setAttributeList] = useState(character.attributes);
    const [classList, setClassList] = useState(character.classes);
    const [skillList, setSkillList] = useState(character.skills);

    const [showClassReqs, setShowClassReqs] = useState(0);

    return (
        <div>
            <div className='header'> Character {character.id} </div>
            <div>
                <SkillCheck />
            </div>
            <div className='div-row'>
                <ChrAttribute attributeList={attributeList} setAttributeList={setAttributeList} classList={classList} />
                <ChrClass classList={classList} setShowClassReqs={setShowClassReqs} />
                {showClassReqs !== 0 ? <ChrClassReqs selectedClass={showClassReqs} setShowClassReqs={setShowClassReqs} /> : null}
                <ChrSkill skillList={skillList} />
            </div>
        </div>
    )
}

export default Character