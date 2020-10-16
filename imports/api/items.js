import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Items = new Mongo.Collection('items');

Meteor.methods({
	createItem(item) {
		return Items.insert(item);
	},
});
