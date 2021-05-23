import styled from "styled-components";
import {LAPTOP_RESOLUTION} from "../utils/constants";

export const PhotosContainer = styled.div`
  display: grid;
  grid-column-gap: 4.8rem;
  grid-row-gap: 6rem;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 1rem;
  @media (min-width: ${LAPTOP_RESOLUTION}px) {
    grid-template-columns: 1fr 1fr;
  }
`;