export declare enum EnumMessageDirection {
    IN = "in",
    OUT = "out"
}

export default interface IMessage {
	messageId: string;
	direction: EnumMessageDirection;
	text: string;
	time?: string;
}
