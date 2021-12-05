import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 330px;
  position: relative;
  border-radius: 0.5rem;
  margin: 1rem 0;
  transition: linear 0.2s;

  &:hover {
    border: 1px solid var(--golden);
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
  }

  div {
    width: 100%;
    height: 6rem;
    border-top: 1px solid var(--golden);
    position: absolute;
    bottom: 0;
    padding: 1rem 0.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0 0 0.5rem 0.5rem;

    h1 {
      color: var(--golden);
      font-size: 1rem;
      letter-spacing: 0.2rem;
    }

    span {
      color: var(--text-content);
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
    }
  }
`
