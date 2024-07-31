import { useState, useEffect } from "react";

const useFetchAllCats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // http://www.dashboardchatterie.hadrien-janssens.com/
  useEffect(() => {
    const fetchAllCats = async () => {
      try {
        const res = await fetch(
          "http://www.dashboardchatterie.hadrien-janssens.com/api/controllers/fetchAllCats.php"
        );
        const data = await res.json();
        setCats(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCats();
  }, []);

  return { cats, loading, error };
};

export default useFetchAllCats;
