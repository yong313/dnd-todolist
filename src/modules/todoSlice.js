import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    backendData: {
      [uuidv4()]: {
        title: "대기중",
        cards: [
          { id: uuidv4(), title: "테스트_1", content: "테스트_1" },
          { id: uuidv4(), title: "테스트_2", content: "테스트_2" },
          { id: uuidv4(), title: "테스트_3", content: "테스트_3" },
        ],
      },
      [uuidv4()]: {
        title: "진행중",
        cards: [],
      },
      [uuidv4()]: {
        title: "완료",
        cards: [],
      },
    },
    listModalOpen: false,
    errorMsg: false,
  },

  reducers: {
    // 리스트 모달
    LIST_MODAL_OPEN: (state) => {
      state.errorMsg = false;
      state.listModalOpen = !state.listModalOpen;
    },
    // 리스트 추가
    ADD_LIST: (state, action) => {
      state.backendData = { ...state.backendData, action };
      console.log(action.payload);
      console.log(state.backendData);
    },
  },
});

export const { LIST_MODAL_OPEN, ADD_LIST } = todoSlice.actions;

export default todoSlice.reducer;
