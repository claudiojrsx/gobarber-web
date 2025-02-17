import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    align-self: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#341f97')};
    font-size: 25px;
    font-weight: normal;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
    font-weight: bold;
  }
`;
