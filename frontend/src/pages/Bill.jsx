import React, { useEffect, useState } from 'react';
import billImage from '../assets/images/form.png'; 
import BillCard from '../components/BillCard';
import BillAvarge from '../components/BillAvarge';
const adduri="http://localhost:5000/api/bills/add"
const geturi="http://localhost:5000/api/bills/getall"
import { toast } from 'react-toastify';



function Bill() {
  const getBills=async()=>{
    try {
      const response= await fetch(geturi)
      if(response.ok){
        const data= await response.json()
        setBills(data)
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
getBills()
  },[])

  const [formData, setFormData] = useState({
    customerName: '',
    meterNumber: '',
    month: '',
    reading: '',
    amount: ''
  });
  const [bills, setBills] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {                
      const response = await fetch(adduri, {
  method: "POST",
  headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(formData) 
});

const data= await response.json()

      if(response.ok){
        toast.success(data.message)
      }
      else{
      toast.error(data.error)
        
      }
    } catch (error) {
      toast.error(error)
    }
    
    setBills([...bills, formData]);
    setFormData({
      customerName: '',
      meterNumber: '',
      month: '',
      reading: '',
      amount: ''
    });
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={billImage} alt="Bill Reminder" className="img-fluid rounded shadow" />
        </div>

        
        <div className="col-md-6">
          <h3 className="mb-4 text-primary">Add Monthly Bill</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input type="text" name="customerName" className="form-control" onChange={handleChange} value={formData.customerName} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Meter Number</label>
              <input type="text" name="meterNumber" className="form-control" onChange={handleChange} value={formData.meterNumber} required />
            </div>

           <div className="mb-3">
  <label className="form-label">Month</label>
  <select
    name="month"
    className="form-select"
    onChange={handleChange}
    value={formData.month}
    required
  >
    <option value="">Select a month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>
</div>
            <div className="mb-3">
              <label className="form-label">Reading</label>
              <input type="number" name="reading" className="form-control" onChange={handleChange} value={formData.reading} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Amount (Rs)</label>
              <input type="number" name="amount" className="form-control" onChange={handleChange} value={formData.amount} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Save Bill</button>
          </form>
        </div>
      </div>


     <div className="mt-5">
  <h4>Saved Bills</h4>
  {bills.length === 0 ? (
    <p>No bills added yet.</p>
  ) : (
    <div className="row">
      {bills.map((bill, index) => (
        <div
          key={index}
          className="col-6 col-sm-4 col-md-3 custom-lg-5 mb-4"
        >
         <BillCard
  bill={bill}
  onDelete={(id) => setBills(bills.filter(b => b.id !== id))}
  onUpdate={getBills}
/>

        </div>
      ))}
    </div>
  )}
</div>

      <div>
        { bills.length>0&&(

          <BillAvarge bills={bills}/>
        )
        }
      </div>
    </div>
  );
}

export default Bill;
