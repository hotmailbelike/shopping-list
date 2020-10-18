<template>
	<v-app>
		<v-container>
			<h1>{{ greeting }}</h1>

			<header>
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
			</header>

			<router-view></router-view>
		</v-container>
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
