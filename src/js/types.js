/* @flow */
export type ListSchema = {
	id: string;
	name: string;
	created_at: Date;
};

export type TaskSchema = {
	id: string;
	list: string;
	name: string;
	status: string;
	created_at: Date;
	remind_at: Date;
};

export type ReduxAction = {
	type: string;
	payload: any;
};