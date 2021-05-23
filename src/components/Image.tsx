import styled from "styled-components";
import {DESKTOP_MIN_RESOLUTION} from "../utils/constants";

export const ImageContentContainer = styled.div`
  box-shadow: 0.2rem 0.8rem 0.6rem 0.1rem rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${DESKTOP_MIN_RESOLUTION}px) {
    background-image: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgb(230 230 230 / 0%), #FFFFFF 100%);
    position: absolute;
  }
`

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (min-width: ${DESKTOP_MIN_RESOLUTION}px) {
    height: 100%;
    margin: 0 0 2.3rem 2.8rem;
  }
`

export const ImageTitle = styled.a`
  margin: 1.2rem 0 1.4rem 1.6rem;
  font-size: 2.4rem;
  font-weight: 500;
;
  @media ( min-width: ${DESKTOP_MIN_RESOLUTION}px) {
    font-size: 4.8rem;
    margin: 0;
  }
`
export const ImageSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 1.9rem;
  font-size: 1.4rem;
  @media (min-width: ${DESKTOP_MIN_RESOLUTION}px) {
    margin: 0;
    font-size: 2.4rem;
  }
`

export const ImageSubtitleExtraContent = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const ImageSubtitleDataContent = styled.p`
  margin: 0 1.2rem 0 1.5rem;
  white-space: nowrap;
  font-size: 1.8rem;
  text-overflow: ellipsis;
  max-width: 30.7rem;
  overflow: hidden;
  @media (min-width: ${DESKTOP_MIN_RESOLUTION}px) {
    margin: 0 1.5rem 0 2.9rem;
    font-size: 3.6rem;
  }
`

export const ImageLink = styled.a`
  color: #E61577;
`