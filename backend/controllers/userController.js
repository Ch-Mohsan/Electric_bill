const getDB = require('../utilities/db');
const bcrypt = require('bcrypt'); 


exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const db = await getDB();

    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 

    await db.execute(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email, phone, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await getDB(); 

    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const user = rows[0];
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email, phone: user.phone }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};
