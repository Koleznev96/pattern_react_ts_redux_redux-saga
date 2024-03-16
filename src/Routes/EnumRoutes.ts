export const NEW_ITEM = 'new';

const enum EnumRoutes {
	HOME = '/',
	LIVECHAT = '/livechat',
	CHANNELS = '/channels',
	CHANNEL = '/channels/:channelId',
	CHANNEL_MESSAGE_COMPOSER = '/channels/:channelId/message',
	CHANNEL_INFO = '/channels/:channelId/info',
	CHATS = '/chats',
	ALL_CHATS = '/chats/all',
	CHAT = '/chats/:chatId',
	BULK_MESSAGE_COMPOSER = '/bulk-message',
	BULK_SELECT = '/bulk-message/bulk-select',
	LIVE_SESSIONS = '/live-sessions',
	LIVE_SESSION = '/live-sessions/:liveSessionId',

	INTRO = `--modal/introduction`,
	SETTINGS = '--modal/settings/:tab',
	SETTINGS_EDIT = '--modal/settings/:tab/:id',
	SIP_CALL = `--modal/call`,
}

export const isModalRoute = (path?: string) => path && path.indexOf('--modal/') !== -1;

export default EnumRoutes;
