<template>
	<div>
		<header>
			<div class="banner"></div>
		</header>
		<section class="Comprar">
			<div class="contenido__comprar">
				<h3>¿Que auto compro?</h3>
				<p>
					¿Te gustaría tener ese modelito de auto que tanto has visto? <br />
					Pon atención a este artículo, puesto que al momento <br />
					de comprar un auto usado, hay varias cosas que debes saber, además de <br />
					realizar algunos trámites. En el blog de <br />
					LegalChile te lo contamos. <br />
					Foto: La Tercera
				</p>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
					Possimus provident iste repudiandae numquam accusamus <br />
					laborum ratione doloribus quibusdam? Asperiores possimus <br />
					aspernatur modi aut voluptatum. Odit illum quidem corrupti <br />
					aliquid ullam?
				</p>
			</div>
			<div class="card" style="width: 18rem;">
				<img
					src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg"
					class="card-img-top"
					alt="..."
				/>
				<div class="card-body">
					<h5 class="card-title">¿Quieres comprar un vehículo?</h5>
					<p class="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea culpa fugit ipsam corporis
						suscipit commodi itaque, doloribus necessitatibus...
					</p>
					<a
						href="https://www.forum.cl/cotizador/?utm_source=google&utm_medium=cpc&utm_campaign=compra_auto&utm_content=compra&gclid=CjwKCAjw2Jb7BRBHEiwAXTR4jTMKYf2ZMSGuUqsVtnpCmLPYIUBTvyV_x3eWk2LRnAXydn7SGzewPBoCZTEQAvD_BwE"
						class="btn btn-primary" 
						>Ver Guía</a
					>
				</div>
			</div>
		</section>

		<footer>
			<div class="Footer">
				<div>
          <h6>Santiago de Chile</h6>
					<p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Home',
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	widows: 100%;
}
.banner {
	background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxFQX5_RH--12dTIgJQkj4NcNOgPpp3HG2xw&usqp=CAU');
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 350px;
}

.Comprar {
	display: flex;
	justify-content: space-between;
	padding: 5%;
	vertical-align: middle;
	align-content: center;
}
footer {
	background-color: black;
}
</style>
