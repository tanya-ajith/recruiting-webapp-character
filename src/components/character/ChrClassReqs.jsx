import React from 'react'
import { CLASS_LIST } from '../../consts'

const ChrClassReqs = ({ selectedClass, setShowClassReqs }) => {
    const selectedClassItem = Object.entries(CLASS_LIST)[selectedClass - 1];

    return (
        <div className='section'>
            <table>
                <thead>
                    <tr className='header'>
                        <th> {selectedClassItem[0]} Minimum Requirements </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(selectedClassItem[1])?.length > 0 ? Object.entries(selectedClassItem[1]).map(([attribute, value]) => {
                            return (
                                <tr className='text' key={attribute}>
                                    <td> {attribute}: {value} </td>
                                </tr>
                            )
                        }) : <tr> <td> No data available </td> </tr>
                    }
                </tbody>
            </table>
            <button className='button' onClick={() => setShowClassReqs(0)}> Close Requirement View </button>
        </div>
    )
}

export default ChrClassReqs