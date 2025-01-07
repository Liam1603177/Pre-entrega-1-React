import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const ChildMemo = React.memo(({ countTwo }) => {
  console.log("Se renderiza componente hijo");

  return <Box>countTwo: {countTwo}</Box>;
});

export const Memo = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleRenderChild = () => {
    setCountTwo(countTwo + 1);
  };

  console.log("Se renderiza componente principal");
  return (
    <Box>
      <Button onClick={handleAdd}>+</Button>
      <Button onClick={handleRemove}>-</Button>
      <Box>{count}</Box>
      <Button onClick={handleRenderChild}>Renderizar componente hijo</Button>
      <ChildMemo countTwo={countTwo} />
    </Box>
  );
};