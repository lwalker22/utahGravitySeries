import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";


export const VenueContainer = styled.div`
  background-image: linear-gradient(to right, white, black, black, black, black );
  padding: 0;
  border: 5px solid white;

`;

export const VenueHeader = styled.h1`
  color: white;
  text-align: center;
  font-family: 'Inter', serif;
  font-size: 3em;
  font-weight: 450;
  font-style: italic;
  text-decoration: underline;

`;

export const VenueLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'Inter', serif;
  font-weight: 450;
  font-size: 2em;
  display: block;
  text-align: center;
  padding: .25em;
`;

export const VenueList = styled.h3`
  
`;