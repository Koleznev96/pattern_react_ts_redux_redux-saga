import _ from 'lodash';
import moment, {Moment} from 'moment';

import IMessage, {EnumMessageDirection} from './Model';

const USERNAME_DEFAULT = 'T';

export interface IChatSummary {
	FIRST?: Moment;
	LAST?: Moment;
	CHATS?: number;
}

export class MessageViewModel {
	messageId = '';
	time: Moment = moment();
	text = '';
	readonly userName: string = USERNAME_DEFAULT;
	readonly sentDate?: string;

	constructor(
		private message: IMessage,
		private readonly userAvatar: string | undefined,
	) {

		if (message.messageId) {
			this.messageId = message.messageId;
		}

		this.userName = userAvatar || USERNAME_DEFAULT;

		if (message.time) {
			this.time = moment(parseInt(message.time, 10));
			this.sentDate = this.time.clone().startOf('day').format();
		}

		if (message.text) {
			this.text = message.text.trim();
		}
	}

	get direction(): EnumMessageDirection {
		return _.get(this, 'message.direction', EnumMessageDirection.IN);
	}

	get isIncoming() {
		return this.direction === EnumMessageDirection.IN;
	}

	get isOutgoing() {
		return this.direction === EnumMessageDirection.OUT;
	}
}
