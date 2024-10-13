import '../custom.css';

const ChrSkill = ({ skillList }) => {
    return (
        <div className='section'>
            <table>
                <thead>
                    <tr className='header'>
                        <th colSpan={4}> Skills </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={4}>Total skill points available: </td>
                    </tr>
                    {
                        skillList?.length > 0 ? skillList.map((skill, index) => {
                            return (
                                <tr className='text' key={index}>
                                    <td> {skill.name}: {skill.value} </td>
                                    <td> ({skill.modifierName}: {skill.modifierValue}) </td>
                                    <td>
                                        <button>+</button>
                                        <button>-</button>
                                    </td>
                                    <td>Total: {skill.value + skill.modifierValue} </td>
                                </tr>
                            )
                        }) : <tr> <td colSpan={4}> No data available </td> </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ChrSkill