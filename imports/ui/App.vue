<template>
	<div>
		<p>{{ greeting }}</p>
		<temp-component></temp-component>
	</div>
</template>

<script>
export default {
	data() {
		return {
			greeting: 'Something',
		};
	},
};
</script>

<style lang="css" scoped></style>
