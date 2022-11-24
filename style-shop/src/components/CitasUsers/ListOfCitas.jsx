import React, { useContext, useEffect, useState } from "react";
import contextUsers from "../../contexts/contextUsers/contextUsers";

import Spinner from "../Spinner/Spinner";
import CardBarbero from "./CardBarbero";
import { StyledContainerListBarberos } from "./styles";


const ListOfBarberos = () => {
    const [loading, setLoading] = useState(false);
    const { getBarberos, barberos } = useContext(contextUsers);
  
    useEffect(() => {
      const getBarberosEffect = async () => {
        if (!barberos) {
          setLoading(true);
          await getBarberos();
          setLoading(false);
        }
      };
  
      getBarberosEffect();
  
      return () => setLoading(false);
    }, []);
  
    if (loading) return <Spinner />;
  
    return (
      <StyledContainerListBarberos>
        {barberos?.map((barbero) => (
          <CardBarbero barbero={barbero} key={barbero._id} />
        ))}
      </StyledContainerListBarberos>
    );
  };
  export default ListOfBarberos;
  