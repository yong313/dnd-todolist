import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
// components
import Buttons from "./Buttons";
import Card from "./Card";

const List = ({ listData, listId }) => {
  return (
    <>
      <ListBox key={listId}>
        <TitleBox titleColor={listData.cards.length >= 1}>
          <h1>{listData.title}</h1>
        </TitleBox>
        <Droppable droppableId={listId} key={listId}>
          {(provided, snapshot) => {
            return (
              <CardContent
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? "#a0a6fc" : "#eeeffc",
                  transition: "all 0.45s ease",
                }}
              >
                {listData.cards.map((item, index) => {
                  return <Card key={index} item={item} index={index} />;
                })}
                {provided.placeholder}
              </CardContent>
            );
          }}
        </Droppable>
        <AddBtnBox>
          <Buttons createBtn />
        </AddBtnBox>
      </ListBox>
    </>
  );
};

const ListBox = styled.div`
  flex: 0 0 14%;
  min-width: 14%;
  max-width: 14%;
  height: 97.5%;
  background-color: #eeeffc;
  border-radius: 20px;
  margin-right: 30px;
  scroll-snap-align: start;

  :last-child {
    margin-right: 0;
  }

  animation: listAnime 0.55s ease;
  @keyframes listAnime {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 1920px) {
    flex: 0 0 10.5%;
    min-width: 10.5%;
    max-width: 10.5%;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  overflow: scroll;
  padding: 0 20px;
  color: ${(props) => (props.titleColor ? "#404df7" : "#ccc")};
  transition: all 0.85s ease;

  h1 {
    font-size: 1.35rem;
    font-weight: bold;
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  padding: 10px 20px;
`;

const AddBtnBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

export default List;
