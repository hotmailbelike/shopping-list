<template>
	<div>
		<v-card class="mb-5">
			<v-card-list>
				<form @submit.prevent="saveNewItem">
					<v-container>
						<v-row align="center">
							<v-col
								><v-text-field label="Name" id="item-name" v-model="item.name"
							/></v-col>
							<v-col
								><v-text-field label="Price" id="item-name" v-model="item.price"
							/></v-col>
							<v-col><v-btn color="primary" type="submit">Submit</v-btn></v-col>
						</v-row>
					</v-container>
				</form>
			</v-card-list>
		</v-card>

		<v-card>
			<v-card-text>
				<v-list>
					<v-list-item v-for="(item, index) in items" :key="index">
						<v-list-item-content two-lines>
							<v-list-item-title>
								{{ item.name }} costs ${{ item.price }}
							</v-list-item-title>
							<v-list-subtitle>
								{{ item._id }}
							</v-list-subtitle>
						</v-list-item-content>
						<v-list-item-action>
							<v-btn icon @click="handleDelete(item)">
								<v-icon>mdi-delete</v-icon>
							</v-btn>
						</v-list-item-action>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

import { Items } from '../imports/api/items';

export default {
	data() {
		return {
			item: { name: '', price: null },
		};
	},
	methods: {
		saveNewItem() {
			Meteor.call('createItem', this.item, (e, res) => {
				if (e) {
					console.log(e);
				} else {
					console.log(res);
					this.item = { name: '', price: null };
				}
			});
		},
		handleDelete(item) {
			Meteor.call('deleteItem', item, (err, res) => {
				if (err) {
					console.log('handleDelete -> err', err);
				} else {
					console.log(res);
				}
			});
		},
	},
	meteor: {
		$subscribe: {
			allItems: [],
		},
		items() {
			return Items.find({}).fetch();
		},
	},
};
</script>

<style lang="css" scoped></style>
