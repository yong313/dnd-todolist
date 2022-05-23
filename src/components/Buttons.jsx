import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const Buttons = (props) => {
  const {
    addList,
    createBtn,
    addBtn,
    editBtn,
    editBtnTwo,
    cancelBtn,
    deleteBtn,
    closeBtn,
    _onClick,
    active,
    el,
  } = props;

  if (addList) {
    return (
      <>
        <AddListBox onClick={_onClick}>
          <h1>리스트 추가하기</h1>
        </AddListBox>
      </>
    );
  }

  if (closeBtn) {
    return (
      <>
        <CloseBtn onClick={_onClick}>
          <IoMdClose />
        </CloseBtn>
      </>
    );
  }

  if (deleteBtn) {
    return (
      <>
        <DeleteBtn onClick={_onClick}>삭제하기</DeleteBtn>
      </>
    );
  }

  if (cancelBtn) {
    return (
      <>
        <CancelBtn onClick={_onClick}>취소</CancelBtn>
      </>
    );
  }

  if (editBtnTwo) {
    return (
      <>
        <DefaultBtn onClick={_onClick} active={active}>
          수정완료
        </DefaultBtn>
      </>
    );
  }

  if (editBtn) {
    return (
      <>
        <EditBtn onClick={_onClick} active={active}>
          수정하기
        </EditBtn>
      </>
    );
  }

  if (addBtn) {
    return (
      <>
        <DefaultBtn onClick={_onClick} active={active}>
          만들기
        </DefaultBtn>
      </>
    );
  }

  if (createBtn) {
    return (
      <>
        <CreateBtn onClick={_onClick} el={el}>
          새 카드 만들기
        </CreateBtn>
      </>
    );
  }
};

const CreateBtn = styled.button`
  font-size: 1.15rem;
  font-weight: bold;
  z-index: 1;

  :hover {
    transition: all 0.35s ease;
    color: #404df7;
  }
  :not(:hover) {
    transition: all 0.35s ease;
    color: #ccc;
  }
`;

const DefaultBtn = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 15px;
  font-size: 1.05rem;
  font-weight: bold;
  margin-right: 3.5%;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  color: ${(props) => (props.active ? "#fff" : "#7f7f7f")};
  background-color: ${(props) => (props.active ? "#404df7" : "#fff")};
  transition: all 0.35s ease;
`;

const EditBtn = styled(DefaultBtn)`
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #404df7;
  }

  :not(:hover) {
    color: #7f7f7f;
    background-color: #fff;
  }
`;

const CancelBtn = styled(DefaultBtn)`
  margin: 0;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #ff7a7a;
  }
`;

const DeleteBtn = styled(DefaultBtn)`
  cursor: pointer;
  margin: 0;

  :hover {
    color: #fff;
    background-color: #ff7a7a;
  }

  :not(:hover) {
    color: #7f7f7f;
    background-color: #fff;
  }
`;

const CloseBtn = styled.button`
  width: auto;
  height: auto;
  font-size: 1.75rem;
  transition: all 0.35s ease;

  :hover {
    color: #ff7a7a;
  }
  :not(:hover) {
    color: #ccc;
  }
`;

const AddListBox = styled.button`
  width: auto;
  height: auto;
  font-size: 1.45rem;
  font-weight: bold;
  transition: all 0.35s ease;

  :hover {
    color: #404df7;
  }
  :not(:hover) {
    color: #ccc;
  }
`;

export default Buttons;
