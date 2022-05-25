import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LIST } from "../modules/todoSlice";
import { v4 as uuidv4 } from "uuid";
// components
import Buttons from "./Buttons";

const ListModal = ({ closeHandler }) => {
  const showErrorMsg = useSelector((state) => state.todo.errorMsg);
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);

  const newList = {
    [uuidv4()]: {
      title: title,
      cards: [],
    },
  };
  const addNewList = newList;

  const dispatch = useDispatch();

  // 입력한 텍스트 저장
  const userOnText = () => {
    setTitle(titleRef.current.value);
  };

  // 리스트 추가
  const addListHandler = useCallback(() => {
    if (title.length >= 1) {
      dispatch(ADD_LIST(addNewList));
    }
  }, [title.length, addNewList, dispatch]);

  return (
    <>
      <ListModalBox>
        <Content>
          <InputBox>
            <div>
              <Label>리스트 이름</Label>
              <TitleInput
                ref={titleRef}
                title={title}
                onChange={userOnText}
                placeholder="이름을 입력해 주세요 ✨"
              />
            </div>
          </InputBox>
          <ErrorMsgBox>
            {showErrorMsg ? (
              <h1>이미 사용 중인 리스트 이름이 있습니다 😅</h1>
            ) : null}
          </ErrorMsgBox>
          <ButtonBox>
            <Buttons
              addBtn
              active={title.length >= 1}
              _onClick={addListHandler}
            />
            <Buttons cancelBtn _onClick={closeHandler} />
          </ButtonBox>
        </Content>
      </ListModalBox>
    </>
  );
};

const ListModalBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(42, 50, 151, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;

  animation: modalBgAnime 0.35s ease;
  @keyframes modalBgAnime {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  width: 28%;
  height: auto;
  border-radius: 20px;
  background-color: #eeeffc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 0;

  animation: modalContentAnime 0.65s ease;
  @keyframes modalContentAnime {
    from {
      opacity: 0;
      margin-bottom: 150px;
    }
    to {
      opacity: 1;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1920px) {
    width: 20.5%;
  }
`;

const InputBox = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ErrorMsgBox = styled.div`
  width: 80%;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;

  h1 {
    color: #ff7a7a;
    font-size: 1rem;
    font-weight: bold;

    animation: errorMsgAnime 0.75s ease;
    @keyframes errorMsgAnime {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const Label = styled.h1`
  width: 100%;
  height: auto;
  color: #404df7;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  padding: 0 20px;
  font-size: 1rem;
  box-shadow: 0px 3px 10px rgba(65, 78, 245, 0.1);
`;

const ButtonBox = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ListModal;
