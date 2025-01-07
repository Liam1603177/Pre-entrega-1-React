import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("isUserConnected", true);
    navigate("/");
  };
  return (
    <div>
      No estas conectado, <Button onClick={login}>inicia sesión</Button>
    </div>
  );
};