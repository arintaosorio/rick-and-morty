import React, { useState, useEffect, useCallback, useMemo } from "react";
import Axios from "axios";
import {
  Container,
  Navbar,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import Pagination from "./Components/Pagination";
import { AppState, ResponeType, Data } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import CharacterCard from "./Components/CharacterCard";

const url = "https://rickandmortyapi.com/api/character/";

function groupBy(arr: Data[], num: number) {
  const group = [];
  for (let i = 0, end = arr.length / num; i < end; ++i)
    group.push(arr.slice(i * num, (i + 1) * num));
  return group;
}

function App() {
  const [state, setState] = useState<AppState>({
    activePage: 0,
    totalPages: 0,
    searchText: "",
  });

  const fetchData = useCallback((url: string, activePage = 0) => {
    Axios.get<ResponeType>(url)
      .then(({ data }) => {
        setState((st) => ({
          ...st,
          activePage,
          totalPages: data.info.pages,
          data: data.results.map((character) => ({
            name: character.name,
            location: character.location.name,
            image: character.image,
            episodes: character.episode,
          })),
        }));
      })
      .catch();
  }, []);

  useEffect(() => {
    fetchData(`${url}?page=${state.activePage}`);
  }, []);

  const setActivePage = useCallback((activePage) => {
    fetchData(`${url}?page=${activePage}`, activePage);
  }, []);

  const dataGroupByRow = useMemo(() => {
    const filteredData = state.data?.filter((character) => {
      return (
        character.location.includes(state.searchText) ||
        character.episodes.join(" ").includes(state.searchText)
      );
    });
    return groupBy(filteredData || [], 3);
  }, [state.data, state.searchText]);

  return (
    <div className="App">
      <Container>
        <Navbar>
          <img
            src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e"
            width="50%"
            height="auto"
            className="d-block align-top mx-auto"
            alt="Rick and Morty"
          />
        </Navbar>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={(event) =>
              setState((st) => ({ ...st, searchText: event.target.value }))
            }
          />
        </InputGroup>
     

        {dataGroupByRow.map((row, index) => {
          return (
            <Row key={`card_key_${index}`}>
              {row.map((col) => (
                <Col md={4} lg={4} sm={6}>
                  <CharacterCard
                    key={col.name}
                    name={col.name}
                    image={col.image}
                    episodes={col.episodes}
                    location={col.location}
                  />
                </Col>
              ))}
            </Row>
          );
        })}
           <Pagination
          activePage={state.activePage}
          noOfPages={state.totalPages}
          setActivePage={setActivePage}
        />
      </Container>
    </div>
  );
}

export default App;
