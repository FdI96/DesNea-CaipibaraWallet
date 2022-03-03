import React from 'react';
const Records = ({ data }) => {
  return (
    <div>
      <table>
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr>
                            <td>{item.concept}</td>
                            <td>{item.amount}</td>
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>&nbsp;</td>
                        </tr>
                        )
                        
                    })}
                </tbody>
            </table>
      
      
    </div>
  );
};
export default Records;