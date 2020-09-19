<template>
	<div class="Contact">
		<h3>¿Tienes dudas?</h3>
		<h5>¡Contáctanos!</h5>
		<form>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="inputEmail4">Nombre</label>
					<input type="text" class="form-control" id="inputEmail4" />
				</div>
				<div class="form-group col-md-6">
					<label for="inputPassword4">Apellido</label>
					<input type="text" class="form-control" id="inputPassword4" />
				</div>
			</div>
			<div class="form-group">
				<label for="inputAddress">Correo electrónico</label>
				<input type="email" class="form-control" id="inputAddress" placeholder="1234 Main St" />
			</div>
			<div class="form-group">
				<label for="inputAddress2">Celular</label>
				<input type="number" class="form-control" id="inputAddress2" placeholder="+(56)" />
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="inputCity">Cuidad</label>
					<input type="text" class="form-control" id="inputCity" />
				</div>
				<div class="form-group col-md-4">
					<label for="inputState">Comuna</label>
					<select id="inputState" class="form-control">
						<option selected>Elige...</option>
						<option>...</option>
					</select>
				</div>
			</div>

			<button type="submit" class="btn btn-primary">Sign in</button>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style>
.Contact {
	padding: 60px;
}
</style>
