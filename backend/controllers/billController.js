const getDB = require('../utilities/db'); // this should return a promise-based connection

exports.addBill = async (req, res) => {
  const { customerName, meterNumber, month, reading, amount } = req.body;

  if (!customerName || !meterNumber || !month || !reading || !amount) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const db = await getDB();

    const [result] = await db.execute(
      'INSERT INTO bills (customerName, meterNumber, month, reading, amount) VALUES (?, ?, ?, ?, ?)',
      [customerName, meterNumber, month, reading, amount]
    );

    res.status(201).json({ message: 'Bill added successfully', billId: result.insertId });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBill = async (req, res) => {
  try {
    const db = await getDB();

    const [results] = await db.execute('SELECT * FROM bills');

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBillById = async (req, res) => {
  try {
    const db = await getDB();
    const [results] = await db.execute('SELECT * FROM bills WHERE id = ?', [req.params.id]);

    if (results.length === 0) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    res.status(200).json(results[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateBill = async (req, res) => {
  try {
    const { customerName, meterNumber, month, reading, amount } = req.body;

    const db = await getDB();

    const [result] = await db.execute(
      'UPDATE bills SET customerName = ?, meterNumber = ?, month = ?, reading = ?, amount = ? WHERE id = ?',
      [customerName, meterNumber, month, reading, amount, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    res.status(200).json({ message: 'Bill updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.deleteBill = async (req, res) => {
  try {
    const db = await getDB();

    const [result] = await db.execute('DELETE FROM bills WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    res.status(200).json({ message: 'Bill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




