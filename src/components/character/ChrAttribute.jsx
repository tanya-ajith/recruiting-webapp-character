import '../custom.css';

const ChrAttribute = ({ attributeList, setAttributeList }) => {

    const handleIncrease = (key) => {
        // checks for max attribute limit of 70
        const total = attributeList.reduce((sum, attribute) => sum + attribute.value, 0);

        if (total >= 70) {
            alert('A character can have upto 70 delegated attribute points');
        } else {
            let updatedAttribute = attributeList[key];
            updatedAttribute.value += 1;

            //modifier value logic
            if (updatedAttribute.value >= 10) {
                updatedAttribute.modifierValue = Math.floor((updatedAttribute.value - 10) / 2);
            } else {
                updatedAttribute.modifierValue = Math.ceil((10 - updatedAttribute.value) / 2) * -1;
            }

            const updatedAttributeList = attributeList.map((attribute) => {
                return attribute.name === updatedAttribute.name ? updatedAttribute : attribute;
            });
            setAttributeList(updatedAttributeList);
        }
    }

    const handleDecrease = (key) => {
        let updatedAttribute = attributeList[key];
        updatedAttribute.value -= 1;

        //modifier value logic
        if (updatedAttribute.value >= 10) {
            updatedAttribute.modifierValue = Math.floor((updatedAttribute.value - 10) / 2);
        } else {
            updatedAttribute.modifierValue = Math.ceil((10 - updatedAttribute.value) / 2) * -1;
        }

        const updatedAttributeList = attributeList.map((attribute) => {
            return attribute.name === updatedAttribute.name ? updatedAttribute : attribute;
        });
        setAttributeList(updatedAttributeList);
    }

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
                                        <button onClick={() => handleIncrease(index)} >+</button>
                                        <button onClick={() => handleDecrease(index)} >-</button>
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