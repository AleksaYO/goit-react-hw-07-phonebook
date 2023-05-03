import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6452763abce0b0a0f747aaa7.mockapi.io/api/v1';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const fetch = await axios.get('/contacts');
      console.log(fetch.data);
      return fetch.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const contact = {
//   createdAt: '2023-05-03T03:46:02.093Z',
//   name: 'Emilio Kerluke',
//   number: '852-822-0557 x633',
//   id: '2',
// };
