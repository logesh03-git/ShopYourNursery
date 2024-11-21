const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchReviews = async () => {
  const response = await fetch(`${API_BASE_URL}/api/users/reviews`);
  if (!response.ok) {
    throw new Error("Error fetching reviews");
  }
  const json = await response.json();
  return json;
};
export const fetchPlants = async (filters: any) => {
  const response = await fetch(`${API_BASE_URL}/api/plants/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filters }),
  });
  if (!response.ok) {
    throw new Error("Error fetching plants");
  }
  const json = await response.json();
  return json;
};

export const signUp = async (formData: any) => {
  const response = await fetch(`${API_BASE_URL}/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const json = await response.json();
  if (response.status == 409) {
    throw new Error("User already exists");
  }
  if (response.status == 422) {
    throw new Error("UnProcessable Input");
  }
  if (!response.ok) {
    throw new Error("Error while signing up");
  }
  return json;
};

export const verifyOtp = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const json = await response.json();
  if (response.status == 404) {
    throw new Error("User Not Found");
  }
  if (response.status == 400) {
    throw new Error(json.message);
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return json;
};

export const signIn = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (response.status == 401) {
    throw new Error("Invalid Crendentials");
  }

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const json = await response.json();
  return json;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (response.status == 401) {
    throw new Error("Invalid Token");
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const json = await response.json();
  return json;
};
export const postInWishlist = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/api/users/wishlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (response.status == 401) {
    throw new Error("Unauthorized");
  }
  if (response.status == 409) {
    throw new Error("Item Already In  WishList");
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return json;
};

export const getWishlist = async () => {
  const response = await fetch(`${API_BASE_URL}/api/users/wishlist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const json = await response.json();
  if (response.status == 401) {
    throw new Error("Unauthorized");
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return json;
};
export const deleteFromWishlist = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/api/users/wishlist/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const json = await response.json();
  if (response.status == 404) {
    throw new Error("WishList not Found");
  }
  if (response.status == 401) {
    throw new Error("Unauthorized");
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return json;
};
