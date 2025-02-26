import styled from "styled-components";

export const MapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const SidebarWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  min-width: 200px;
  max-width: 400px;
  color: black;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: width 0.2s ease;
`;

export const Edge = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  cursor: col-resize;
  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const Days = styled.div`
  width: 100%;
  height: 100%;
`;
