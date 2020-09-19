<template>
	<div>
		<h1>“Bienvenido a la página de Administración”</h1>
		<router-link :to="{name: 'Simple'}"></router-link> |
		<router-link :to="{name: 'Avanzado'}"> </router-link>
		<router-view />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
