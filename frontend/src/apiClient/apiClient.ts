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
