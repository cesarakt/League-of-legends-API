import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  .moveCarousel {
    background: transparent;
    border: 0;
    cursor: initial;

    img {
      width: 25px;
      height: 25px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  div {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      width: 190px;
      height: 112px;
      border-radius: 0.25rem;
      margin: 0 0.5rem;

      &:hover {
        border: 1px solid var(--golden);
        cursor: pointer;
      }
    }
  }
`
