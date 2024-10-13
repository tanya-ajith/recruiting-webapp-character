import '../custom.css';

const ChrAttribute = ({ attributeList }) => {
    return (
        <div className='section'>
            <table>
                <thead>
                    <tr className='header'>
                        <th colSpan={3}> Attributes </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attributeList?.length > 0 ? attributeList.map((attribute, index) => {
                            return (
                                <tr className='text' key={index}>
                                    <td> {attribute.name}: {attribute.value} </td>
                                    <td> (Modifier: {attribute.modifierValue}) </td>
                                    <td>
                                        <button>+</button>
                                        <button>-</button>
                                    </td>
                                </tr>
                            )
                        }) : <tr> <td colSpan={3}> No data available </td> </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ChrAttribute