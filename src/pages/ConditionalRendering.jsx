import { Heading, Divider, Button, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

const BoxContext = ({
  isFullScreen,
  isDefaultStyles,
  isUserConnected,
  loginButton,
}) => {
  const myStyles = {
    width: isFullScreen ? "100%" : "50%",
    backgroundColor: "blue",
    color: "red",
  };

  return (
    <>
      <Heading style={isDefaultStyles ? null : myStyles}>
        Conditional Rendering
      </Heading>
      <Divider />
      <Box>
        {isUserConnected ? <Box> Conectado </Box> : <Box> No conectado</Box>}
      </Box>
      <Button onClick={loginButton}>
        {isUserConnected ? "Cerrar Sesión" : "Iniciar Sesión"}
      </Button>
    </>
  );
};

export const ConditionalRendering = ({ componentType }) => {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsUserConnected(true);
    localStorage.setItem("isUserConnected", true);
  };

  const logout = () => {
    setIsUserConnected(false);
    localStorage.setItem("isUserConnected", false);
  };

  switch (componentType) {
    case "button":
      return <Button>Mi boton</Button>;
    case "input":
      return <Input placeholder="Input" />;
    default:
      return (
        <Box>
          <BoxContext
            isFullScreen={false}
            isDefaultStyles={true}
            isUserConnected={isUserConnected}
            loginButton={isUserConnected ? logout : login}
          />
        </Box>
      );
  }
};