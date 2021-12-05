import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg');
  background-size: cover;
  height: 100%;
  border: 2px solid var(--golden);
  border-radius: 0.5rem;
`
export const LoreContent = styled.div`
  background: rgba(10, 10, 12, 0.5);
  border-radius: 0.7rem;
  border: 1px solid var(--golden);
  max-height: 15rem;
  width: 25rem;
  margin-top: 5rem;
  margin-left: 2rem;
  padding: 1rem 0.2rem 1rem 1rem;
  flex: 1;

  div {
    max-height: 100%;
    overflow-y: scroll;

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
  flex: 1;
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

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

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
