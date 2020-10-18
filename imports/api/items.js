import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
	Meteor.publish('allItems', () => {
		return Items.find();
	});
}

Meteor.methods({
	createItem(item) {
		return Items.insert(item);
	},
	/* deleteItem(item) {
		return Items.remove({ _id: item._id });
	}, */
	deleteItem({ _id }) {
		return Items.remove({ _id });
	},
});
