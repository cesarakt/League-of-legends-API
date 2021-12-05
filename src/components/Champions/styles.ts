import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;

  button {
    background: transparent;
    border: 0;
  }
`
