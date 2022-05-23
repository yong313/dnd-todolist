import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import List from "../components/List";
import Buttons from "../components/Buttons";
import { DragDropContext } from "react-beautiful-dnd";

const Main = () => {
  const fromBackendData = useSelector((state) => state.todo.backendData);
  const [list, setList] = useState(fromBackendData);
  const onDragEnd = (result, list, setList) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceList = list[source.droppableId];
      const destList = list[destination.droppableId];
      const sourceCards = [...sourceList.cards];
      const destCards = [...destList.cards];
      const [removed] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, removed);
      setList({
        ...list,
        [source.droppableId]: {
          ...sourceList,
          cards: sourceCards,
        },
        [destination.droppableId]: {
          ...destList,
          cards: destCards,
        },
      });
    } else {
      const lists = list[source.droppableId];
      const copiedItems = [...lists.cards];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setList({
        ...list,
        [source.droppableId]: {
          ...lists,
          cards: copiedItems,
        },
      });
    }
  };

  return (
    <>
      <MainBox>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, list, setList)}
        >
          {Object.entries(list).map(([listId, listData], _index) => {
            return <List key={listId} listData={listData} listId={listId} />;
          })}
        </DragDropContext>
      </MainBox>

      <AddListBtnBox>
        <Buttons addList />
      </AddListBtnBox>
    </>
  );
};

const MainBox = styled.div`
  width: 95%;
  height: 100vh;
  margin: 0 auto;
  padding: 3% 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
`;

const AddListBtnBox = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  top: 2.5%;
  right: 3.5%;
`;

export default Main;
