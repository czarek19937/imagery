import styled from "styled-components";
import {LAPTOP_RESOLUTION} from "../utils/constants";

export const ImageContentContainer = styled.div`
  @media (min-width: ${LAPTOP_RESOLUTION}px) {
    background-image: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgb(230 230 230 / 0%), #FFFFFF 100%);
  }
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`

export const ImageContent = styled.div`
  margin: 0 0 2.3rem 2.8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ImageContainer = styled.div<{ photoUrl: any }>`
  background-image: url(${({ photoUrl}) => photoUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  box-shadow: 0.2rem 0.8rem 0.6rem 0.1rem rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  //overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ImageTitle = styled.a`
  font-size: 4.8rem;
  font-weight: 500;
`
export const ImageSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 2.4rem;
`

export const ImageSubtitleExtraContent = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const ImageSubtitleDataContent = styled.p`
  margin: 0 1.5rem 0 2.9rem;
  font-size: 3.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 30.7rem;
  overflow: hidden;
`

export const ImageLink = styled.a`
`