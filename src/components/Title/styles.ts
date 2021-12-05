import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;

  div {
    width: 40%;
    border-bottom: 1px solid var(--golden);
    margin: 0 2rem;
  }

  span {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-content);
    letter-spacing: 0.75rem;
  }
`
