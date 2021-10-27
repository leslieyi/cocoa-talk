import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () =>
  fetch("/me").then((response) => (response.ok ? response.json() : null))
);

export const logout = createAsyncThunk("user/logout", () =>
  fetch("/logout", { method: "DELETE" })
);

export const login = createAsyncThunk("user/login", (user) =>
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json())
);

export const signup = createAsyncThunk("user/signup", (userInput) =>
  fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInput),
  }).then((res) => res.json())
);

export const editUser = createAsyncThunk("user/editUser", (userInput) =>
  fetch("edit-profile", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInput),
  })
    .then((res) => res.json())
    .then((data) => data.json())
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled](state, action) {
      state.value = action.payload;
      state.loading = false;
    },
    [fetchUser.pending](state) {
      state.loading = true;
    },
    [fetchUser.rejected](state) {
      state.loading = false;
    },
    [logout.fulfilled](state) {
      state.value = null;
    },
    [login.fulfilled](state, action) {
      state.value = action.payload;
    },
    [signup.fulfilled](state, action) {
      state.value = action.payload;
      state.loading = false;
    },
    [signup.pending](state) {
      state.loading = true;
    },
    [signup.rejected](state) {
      state.loading = true;
    },
  },
});

export const selectUser = (state) => {
  const user = state.user.value;
  return user && !user.errors ? user : null;
};

export const selectErrors = (state) => {
  const user = state.user.value;
  return user && user.errors ? user.errors : [];
};

export const selectIsLoading = (state) => state.user.loading;

// export const selectSingupLoading = (state) => state.signup.loading;
//
export default userSlice.reducer;
