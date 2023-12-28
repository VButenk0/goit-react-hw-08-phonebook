export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectEmail = state => state.auth.user?.email;

export const selectIsRefresh = state => state.auth.isRefresh;
