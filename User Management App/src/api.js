// api.js
const BASE_URL = "http://localhost:5000/api/user";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getusers`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch user data");
      return [];
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/deleteuser/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("User deleted successfully");
      return true;
    } else {
      console.error("Failed to delete user");
      return false;
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return false;
  }
};
