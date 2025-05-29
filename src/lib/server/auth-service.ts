import { User } from '../models/user';
import 'server-only';

// Hardcoded users for demo purposes
// In a real application, use a proper authentication system
const USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123', // In a real app, would use hashed passwords
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    username: 'editor',
    password: 'editor123',
    name: 'Editor User',
    role: 'editor',
  },
];

export const authenticateUser = (username: string, password: string): User | null => {
  const user = USERS.find(user => 
    user.username === username && user.password === password
  );
  
  if (!user) return null;
  
  // Return user without password for security
  const { password: _, ...userWithoutPassword } = user;
  return { ...userWithoutPassword, password: '' };
};

export const getUserById = (id: string): User | null => {
  const user = USERS.find(user => user.id === id);
  
  if (!user) return null;
  
  // Return user without password for security
  const { password: _, ...userWithoutPassword } = user;
  return { ...userWithoutPassword, password: '' };
}; 