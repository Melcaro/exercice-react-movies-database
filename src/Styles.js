import styled from 'styled-components';
import { Link } from 'react-router-dom';

//APP PAGE
export const AppStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LinkedElement = styled(Link)`
  text-decoration: none;
`;

export const AppTitle = styled.h1`
  flex: 1 1 10%;
  width: 100%;
  text-decoration: none;
  font-size: 40px;
  color: black;
  font-weight: bold;
  text-align: center;
`;

// SEARCH BAR

export const SearchBarStyle = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const InputStyle = styled.input`
  width: 30vw;
  border-radius: 5px;
  padding: 1%;
  text-align: center;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  position: absolute;
  top: 130%;
  width: 70vw;
`;

// PERSON AND MOVIE SEARCH RESULTS

export const SearchResultsContainer = styled.div`
  flex: 1 1 20%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1%;
`;

export const ResultTitle = styled.p`
  flex: 1 1 10%;
  width: 100%;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 0;
  background-color: white;
  border-radius: 5px;
`;
// HOME PAGE

export const HomePageStyle = styled.div`
  flex: 0 1 auto;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2%;
`;

export const MovieContainer = styled.div`
  flex: 1 1 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ImageContainer = styled.div`
  flex: 1 1 90%;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;

  border-radius: 5px;
`;

export const MovieTitle = styled.p`
  flex: 0 1 10%;
  width: 100%;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

// ACTOR PAGE

export const ActorPageStyle = styled.div`
  border: 1px solid red;
  margin-top: 1%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const ActorPicContainer = styled.div`
  flex: 0 1 10%;
  border: 1px solid green;
  margin-top: 1%;
`;

export const ActorPic = styled.img`
  height: 100%;
  border-radius: 5px;
`;

export const ActorInfosContainer = styled.div`
  flex: 0 1 60%;
  border: 1px solid blue;
  margin-left: 3%;
  margin-top: 1%;
`;

export const ActorCreditsContainer = styled.div`
  border: 1px solid red;
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AppearsInText = styled.p`
  flex: 1 1 100%;
  border: 1px solid brown;
  padding-left: 5%;
  font-weight: bold;
  font-size: 1em;
`;
