import styled from "styled-components";
export const SearchContainer = styled.div`
  width: 60%;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-sie: 16px;
  padding-left: 10px;
  height: 80%;
  padding: 0 1.5rem;
  &:active,
  &:hover {
    box-shadow: rgba(92, 84, 122, 0.2) 0px 2px 6px;
  }
`;
export const SearchJobInput = styled.input`
  background: transparent;
  border: none;
  padding-left: 1rem;
  width: 100%;
  height: 100%;
  outline: none;
`;
