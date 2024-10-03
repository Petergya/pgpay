
export default async function handler(req, res) {
    const { email, password } = req.body;
  
    try {
    
      
      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      res.status(500).json({ message: 'Signup failed' });
    }
  }
  