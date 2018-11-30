import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID f3aebfb124b602f7d4dad0766dbc37482e3fe45a6ef76810673735572ce19b88'
  }
});