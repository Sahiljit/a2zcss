import React from 'react'
import './Table.css'


const Table = () => {
  return (
    <div className='body'>
    <table className='table'>
        <thead>            
        <tr>
            <th>COUNTRY</th>
            <th>INDIA</th>
            <th>CANADA</th>
            <th>AUSTRALIA</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <th>Capital</th>
            <td>Delhi</td>
            <td>Ottawa</td>
            <td>Canberra</td>
        </tr>
        <tr>
            <th>Currency</th>
            <td>Indian Rupee</td>
            <td>Canadian dollar</td>
            <td>Australian dollar</td>
        </tr>
        <tr>
            <th>Dialing Code</th>
            <td>+91</td>
            <td>+1</td>
            <td>+61</td>
        </tr>
        <tr>
            <th>Fav. City</th>
            <td>Amritsar</td>
            <td>Vancouver</td>
            <td>Sydney</td>
        </tr>

        <tr>
            <th>Currency</th>
            <td>Indian Rupee</td>
            <td>Canadian dollar</td>
            <td>Australian dollar</td>
        </tr>

        </tbody>

    </table>
    </div>
  )
}

export default Table