import './custom.css'
import SkillCheck from './skill/SkillCheck'
import ChrAttribute from './character/ChrAttribute'
import ChrSkill from './character/ChrSkill'
import ChrClassReqs from './character/ChrClassReqs'
import ChrClass from './character/ChrClass'

const Character = () => {
    return (
        <div>
            <div>
                <SkillCheck />
            </div>
            <div className='div-row'>
                <ChrAttribute />
                <ChrClass />
                <ChrClassReqs />
                <ChrSkill />
            </div>
        </div>
    )
}

export default Character