import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = (axios.defaults.baseURL =
  "https://movies-back-z2ba.onrender.com/");

// export const fetchMovies = async (filters, page) => {
//   const params = new URLSearchParams({
//     ...filters,
//     page,
//   });
//   const response = await axios.get(`${BASE_URL}movie?${params.toString()}`);
//   return response.data.data;
// };
export const fetchMovies = createAsyncThunk(
  "movie/fetchAll",
  async ({ page, perPage }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${BASE_URL}movie?page=${page}&limit=${perPage}`
      );
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}movie/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMovie = createAsyncThunk(
  "movie/addMovie",
  async (newMovie, thunkAPI) => {
    const toastId = toast.loading("Add...");
    try {
      const { data } = await axios.post(`${BASE_URL}movie`, newMovie);
      toast.success("Successfully added!", { id: toastId });
      return data;
    } catch (error) {
      toast.error("Sorry, we have a problem...", { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editMovie = createAsyncThunk(
  "movie/editMovie",
  async (newMovie, thunkAPI) => {
    const toastId = toast.loading("Edit...");
    try {
      const { data } = await axios.patch(
        `${BASE_URL}movie/${newMovie.id}`,
        newMovie.date
      );
      toast.success("Successfully edit!", { id: toastId });
      return data;
    } catch (error) {
      toast.error("Sorry, we have a problem...", { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movie/deleteMovie",
  async (id, thunkAPI) => {
    const toastId = toast.loading("Delete...");
    try {
      const { data } = await axios.delete(`${BASE_URL}movie/${id}`);
      toast.success("Successfully delete!", { id: toastId });
      return data;
    } catch (error) {
      toast.error("Sorry, we have a problem...", { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
