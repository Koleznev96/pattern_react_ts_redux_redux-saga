import EnumStore from "src/BusinessLogic/EnumStore";
import IRootState from "src/Redux/IRootState";


export const selectMessagesState = (state: IRootState) => state[EnumStore.MESSAGES];
