declare interface EventEmitter {
	on(route: string, cb: (response: any) => void): void;
	
	off(route?: string, cb?: (response: any) => void): void;
}

declare interface NanoClientParams {
	host: string
	port: number
	reconnect?: boolean
	maxReconnectAttempts?: number
	encrypt?: boolean
}

declare interface NanoClient extends EventEmitter {
	init(params: NanoClientParams, cb: () => void): void;
	
	request(route: string, msg: any, cb: (response: any) => void);
	
	disconnect(noReconnect?: boolean): void;
	
	notify(route: string, msg: any);
}

declare var nano: NanoClient