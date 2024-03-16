import cachedViewModelFactory from 'src/Utils/cachedViewModelFactory';

import { MessageViewModel } from './ViewModel';
import IMessage from './Model';

export const getMessageVMCached = cachedViewModelFactory<
	IMessage,
	MessageViewModel
>(MessageViewModel);