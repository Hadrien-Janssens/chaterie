import { useState, useEffect } from "react";

const useFetchImg = (id) => {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //www.dashboardchatterie.hadrien-janssens.com/

  http: useEffect(() => {
    const fetchImg = async () => {
      try {
        const res = await fetch(
          `https://www.dashboardchatterie.hadrien-janssens.com/api/models/fetchImg.php?id=${id}`
        );
        const data = await res.json();
        setImg(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImg();
  }, []);

  return { img, loading, error };
};

export default useFetchImg;
