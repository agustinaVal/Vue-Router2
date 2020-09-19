<template>
	<div>
		<div>
			<h1 v-text="Text">Holaaa</h1>
			<router-link :to="paginacion(false)">Anterior</router-link> |
			<router-link :to="paginacion(true)">Siguiente</router-link>
			<p></p>
			<button class="btn btn-info"><router-link :to="{ name: 'Mensajes' }">Ver Mensaje</router-link></button>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Mensaje',
	methods: {
		paginacion(next) {
			let entrada = parseInt(this.$route.params.entrada);
			if (next) {
				return entrada < 10 ? `/post/${entrada + 1}` : `/post/${entrada}`;
			} else {
				return entrada > 1 ? `/post/${entrada - 1}` : `/post/${entrada}`;
			}
		},
	},
	computed: {
		Text() {
			return `Pagina ${this.$route.params.entrada} del post `;
		},
	},
};
</script>

<style></style>
