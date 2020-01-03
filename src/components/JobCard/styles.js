import styled from "styled-components";

export const JobCardContainer = styled.div`
  border-bottom: 1px solid #d8d1f8;
  padding: 1.2rem 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  transition: 0.3s;
  cursor: pointer;
  span {
    color: #a7b7be;
    margin-right: 2rem;
  }
  &:hover {
    box-shadow: rgba(92, 84, 122, 0.2) 0px 2px 6px;
    h4 {
      color: #4b22f4;
    }
  }
`;

export const JobDescription = styled.div`
  flex: 2;
  strong {
    padding-right: 10px;
  }
  h4 {
    margin: 0;
    margin-bottom 1rem;
  }
  b{
    margin-right:10px;
  }
`;

export const JobDate = styled.div`
  display: flex;
`;

export const JobTags = styled.span`
  border: 1px solid #4b22f4;
  border-radius: 10px;
  margin: 0 1rem;
  padding: 0.3rem 1.2rem;
`;

export const CompanyPhoto = styled.img`
  height: 100%;
  margin-right: 2rem;
`;
