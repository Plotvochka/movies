import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = (axios.defaults.baseURL =
  "https://movies-back-z2ba.onrender.com/");

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
  "movies/addMovie",
  async (movieData, thunkAPI) => {
    const toastId = toast.loading("Adding movie...");
    try {
      const { data } = await axios.post(`${BASE_URL}movie`, movieData);
      toast.success("Movie added successfully!", { id: toastId });
      return data;
    } catch (error) {
      toast.error("Failed to add movie.", { id: toastId });
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ _id, updatedFields }, thunkAPI) => {
    const toastId = toast.loading("Edit movie...");
    try {
      await axios.patch(`${BASE_URL}movie/${_id}`, updatedFields);
      toast.success("Movie edit successfully! Please refresh the page", {
        id: toastId,
      });
      return { _id, updatedFields };
    } catch (error) {
      toast.success("Sorry, we have a problem...", { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movie/deleteMovie",
  async (_id, thunkAPI) => {
    const toastId = toast.loading("Delete...");
    try {
      const { data } = await axios.delete(`${BASE_URL}movie/${_id}`);
      toast.success("Successfully delete!", { id: toastId });
      return data;
    } catch (error) {
      toast.error("Sorry, we have a problem...", { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
