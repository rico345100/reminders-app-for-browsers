/* @flow */
export type ListSchema = {
	id: string;
	name: string;
	created_at: Date;
};

export type ReduxAction = {
	type: string;
	payload: any;
};