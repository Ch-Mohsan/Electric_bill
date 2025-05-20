import React, { useState } from 'react';
import Update from '../components/Update';

function BillCard({ bill, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
  
    try {
      const response = await fetch(`http://localhost:5000/api/bills/deletebyid/${bill.id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        onDelete(bill.id);
      } else {
        alert(data.error || 'Delete failed');
      }
    } catch (error) {
      alert('Something went wrong');
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{bill.customerName}</h5>
        <p className="card-text">Meter Number: {bill.meterNumber}</p>
        <p className="card-text">Month: {bill.month}</p>
        <p className="card-text">Reading: {bill.reading}</p>
        <p className="card-text">Amount: Rs {bill.amount}</p>
        <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
        <button className="btn btn-warning" onClick={handleEditClick}>Edit</button>
      </div>

      {isEditing && (
        <Update bill={bill} onUpdateComplete={() => {
          setIsEditing(false);
          onUpdate(); 
        }} />
      )}
    </div>
  );
}

export default BillCard;
