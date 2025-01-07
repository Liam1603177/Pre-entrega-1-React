import { useParams } from "react-router";
import { ItemDetailContainer, Loader } from "../components";
import { useGetProductById } from "../hooks/useGetProductById";
import { useContext } from "react";
import { CartContext } from "../context";

export const Item = () => {
  const { id } = useParams();

  const {cartState} = useContext(CartContext);
  console.log(cartState)

  const { product, loading } = useGetProductById(id);
  return loading ? <Loader /> : <ItemDetailContainer product={product}/>;
};