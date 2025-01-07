import { useGetAllProducts } from "../hooks/useGetAllProducts";

import { Loader, ItemListContainer } from "../components";

export const Home = () => {
  const { loading, Items } = useGetAllProducts("products");
  return loading ? <Loader /> : <ItemListContainer products={Items} />;
};