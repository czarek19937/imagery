import styled from "styled-components";
import {DESKTOP_MIN_RESOLUTION} from "../utils/constants";

export const PhotosContainer = styled.div`
  display: grid;
  grid-column-gap: 4.8rem;
  grid-row-gap: 6rem;
  grid-template-columns: minmax(0, 1fr);
  justify-items: center;
  padding: 1rem;
  @media (min-width: ${DESKTOP_MIN_RESOLUTION}px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;