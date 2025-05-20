import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Update = ({ bill, onUpdateComplete }) => {
  const [formData, setFormData] = useState({ ...bill });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
      console.log('id here',bill)
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/bills/updatebyid/${bill.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Bill updated successfully!");
        onUpdateComplete();
      } else {
        toast.error(data.error || 'Update failed');
      }
    } catch (error) {
      toast.error("Error updating bill.");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="p-3 border rounded bg-light mt-2">
      <input name="customerName" value={formData.customerName} onChange={handleChange} className="form-control mb-2" />
      <input name="meterNumber" value={formData.meterNumber} onChange={handleChange} className="form-control mb-2" />
      <input name="month" value={formData.month} onChange={handleChange} className="form-control mb-2" />
      <input name="reading" type="number" value={formData.reading} onChange={handleChange} className="form-control mb-2" />
      <input name="amount" type="number" value={formData.amount} onChange={handleChange} className="form-control mb-2" />
      <button type="submit" className="btn btn-success w-100">Update</button>
    </form>
  );
};

export default Update;
