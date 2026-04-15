import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './Card';

const defaultPopupContent = {
  content: {}
};

export function ItemsGrid() {
  const { characters, setIsPopupOpen } = useData();
  const [popupContent, setPopupContent] = useState(defaultPopupContent);

  const createCardClickHandler = useCallback(
    (props) => () => {
      setIsPopupOpen(true);
      setPopupContent(props);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    },
    [setIsPopupOpen, setPopupContent]
  );

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((props) => (
        <Card
          key={props.id}
          onClickHandler={createCardClickHandler(props)}
          {...props}
        />
      ))}
      <Popup content={popupContent} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
