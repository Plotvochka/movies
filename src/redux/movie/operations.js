import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://movies-theta-three-59.vercel.app/";

export const fetchMovies = createAsyncThunk(
  "movie/fetchAllMovie",
  async ({ page, perPage }, thunkAPI) => {
    try {
      const res = await axios.get(`movie/?page=${page}&limit=${perPage}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`movie/${id}`);
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
      const { data } = await axios.post("/contacts", newMovie);
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
        `/movie/${newMovie.id}`,
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
      const { data } = await axios.delete(`/movie/${id}`);
      toast.success("Successfully delete!", { id: toastId });
      return data;
    } catch (error) {
      toast.error("Sorry, we have a problem...", { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
