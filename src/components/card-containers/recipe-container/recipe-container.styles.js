import styled from "styled-components";

export const RecipeWrapper = styled.div`
  width: 60vw;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
`;

export const MainContentWrapper = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: left;
`;

export const LabelWrapper = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;
export const IngredientList = styled.ul`
  width: 50%;
  text-align: justify;
  list-style: none;

  li {
    padding: 10px;
  }
`;

export const ListAndTableWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-evenly;

  gap: 3rem;
`;

export const TableWrapper = styled.div`
  width: 50%;
`;
