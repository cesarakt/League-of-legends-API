import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  height: 100%;
  border: 2px solid var(--golden);
  border-radius: 0.5rem;

  .closeModal {
    position: absolute;
    background: transparent;
    border: 0;
    left: 1rem;
    top: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
`
export const LoreContent = styled.div`
  background: rgba(10, 10, 12, 0.5);
  border-radius: 0.7rem;
  border: 1px solid var(--golden);
  max-height: 40%;
  width: 25rem;
  margin-top: 10%;
  margin-left: 2rem;
  padding: 1rem 0.2rem 1rem 1rem;

  div {
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 0.3rem;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      width: 0.2rem;
      background: rgba(10, 10, 12, 0.5);
      border-radius: 0.5rem;
    }

    p {
      color: var(--text-content);
      margin-right: 0.5rem;
    }
  }
`
export const SkinArea = styled.div`
  border-radius: 0.5rem;
  background: url('./bg-skins.png');
  background-size: cover;
  height: auto;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    color: var(--text-content);
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
`

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  div {
    width: 40%;
    border-bottom: 1px solid var(--golden);
  }

  span {
    color: var(--text-content);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
    margin: 0 1rem;
  }
`
