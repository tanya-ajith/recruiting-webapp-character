import '../custom.css';

const ChrClass = ({ classList, setShowClassReqs }) => {
    return (
        <div className='section'>
            <table>
                <thead>
                    <tr className='header'>
                        <th> Classes </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classList?.length > 0 ? classList.map((classItem, index) => {
                            return (
                                <tr className='text' key={index}>
                                    <td onClick={() => setShowClassReqs(classItem.id)} > {classItem.name} </td>
                                </tr>
                            )
                        }) : <tr> <td> No data available </td> </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ChrClass