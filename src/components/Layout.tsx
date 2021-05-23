import styled from "styled-components";

export const MobileLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  background: white;
`

export const DesktopLayoutContainer = styled.div<{ photoUrl: any }>`
  background-image: url(${({ photoUrl}) => photoUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`