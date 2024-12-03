import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const getBean = createAsyncThunk("bean", async (id: number) => {
  const { data } = await instance.get(`/Beans/${id}`);
  return data;
});
