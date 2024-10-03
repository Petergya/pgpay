
export default async function handler(req, res) {
    const { email, password } = req.body;
  
    try {
      
      if (email === 'test@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Login failed' });
    }
  }
  