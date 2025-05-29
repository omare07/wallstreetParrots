export interface User {
  id: string;
  username: string;
  password: string; // Note: in a real app, would never store plaintext passwords
  name: string;
  role: 'admin' | 'editor';
} 