<template>
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="index">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { Items } from '../imports/api/items';

export default {
	data() {
		return {
			p: 'pasdasdsad',
		};
	},
	meteor: {
		items() {
			return Items.find({}).fetch();
		},
	},
};
</script>

<style lang="css" scoped></style>
