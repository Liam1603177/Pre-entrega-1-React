import { useEffect, useState } from "react";
import { getProductById } from "../services/productServices";

export const useGetProductById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};