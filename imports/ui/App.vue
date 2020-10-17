<template>
	<v-app>
		<v-container
			><p>{{ greeting }}</p>
			<temp-component></temp-component
		></v-container>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			greeting: 'Vue +  Meteor',
		};
	},
};
</script>

<style lang="css" scoped></style>
