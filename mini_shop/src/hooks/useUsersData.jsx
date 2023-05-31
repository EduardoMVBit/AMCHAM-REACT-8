import { useState, useEffect } from "react";

const useUsersData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://646d4d739c677e232189e51a.mockapi.io/user"
        );
        const jsonData = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => setUsers([]);
  }, []);
  return { users, setUsers };
};

export default useUsersData;
