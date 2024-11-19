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
