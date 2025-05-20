import React from 'react';

function BillAvarge({ bills }) {
  if (!bills || bills.length === 0) {
    return <p>No bill data available.</p>;
  }

  const totalAmount = bills.reduce((sum, bill) => sum + parseFloat(bill.amount), 0);
  const overallAverage = (totalAmount / bills.length).toFixed(2);

  return (
    <div className="mt-5">
      <h4>Overall Average Bill</h4>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Total Bills</th>
            <th>Overall Average Bill (Rs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bills.length}</td>
            <td>{overallAverage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BillAvarge;
