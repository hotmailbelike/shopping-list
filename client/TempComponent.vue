<template>
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="index">
				{{ item.name }} for ${{ item.price }}
			</li>
		</ul>

		<form @submit.prevent="saveNewItem">
			<label for="item-name">Name</label>
			<input type="text" id="item-name" v-model="item.name" />
			<br />
			<label for="item-price">Name</label>
			<input type="text" id="item-name" v-model="item.price" />
			<button>Submit</button>
		</form>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

import { Items } from '../imports/api/items';

export default {
	data() {
		return {
			item: { name: '', price: 0 },
		};
	},
	methods: {
		saveNewItem() {
			Meteor.call('createItem', this.item, (e, res) => {
				if (e) {
					console.log(e);
				} else {
					console.log(res);
				}
			});
		},
	},
	meteor: {
		items() {
			return Items.find({}).fetch();
		},
	},
};
</script>

<style lang="css" scoped></style>
