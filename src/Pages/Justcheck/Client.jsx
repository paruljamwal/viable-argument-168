import { useDispatch, useSelector } from "react-redux";
import Bottom from "./Client/Bottom";
import WithoutBottomData from "./Client/WithoutBottomData";
import Mainbox from "./Client/Mainbox";
import Middlebox from "./Client/Middlebox";

import { useEffect, useState } from "react";
import { getClientData, setAllClients } from "../store/Client/action";
import styled from "styled-components";

const Client = () => {
  const client = useSelector((state) => state.client.client);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientData());
    dispatch(setAllClients());
  }, [dispatch]);

  return (
    <ClientCont className="border-lightgray">
      <Mainbox />

      <Middlebox query={query} setQuery={setQuery} />

      {client.length === 0 ? <WithoutBottomData /> : <Bottom query={query} />}
    </ClientCont>
  );
};

export default Client;

const ClientCont = styled.div`
  background-color: #fff;
  height: 100vh;
  font-family: Lato, sans-serif;
  width: 82%;
  margin: 40px auto;
  border-radius: 5px;
  overflow: hidden;
`;
