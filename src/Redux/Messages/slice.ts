import {createSlice, EntityState} from '@reduxjs/toolkit';
import _ from 'lodash';

import EnumStore from 'src/BusinessLogic/EnumStore';

import {messagesAdapter} from './entityAdapter';
import IMessage from './Model';
import { messagesClientOnlyActions } from './Actions/messagesClientOnlyActions';

export const initialState: TMessagesState = messagesAdapter.getInitialState({
	isLoading: false,
	isError: false,
	selectedId: undefined,
	requested: false,
	unseenChatIds: [],
	shownAdminChats: [],
	typingChats: [],
});

export const messagesSlice = createSlice({
	name: EnumStore.MESSAGES,
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(messagesClientOnlyActions.resetStore, () => initialState);
	},
});

export type TMessagesState = EntityState<IMessage> & {
	isLoading: boolean;
	isError: boolean;
	selectedId?: string;
	requested: boolean;
	unseenChatIds: string[];
	shownAdminChats: string[];
	typingChats: string[];
};

export default messagesSlice;
