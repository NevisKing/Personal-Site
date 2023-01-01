<script>
</script>

<body>
	<div>
		<div class="div1">
			<ul >
				<li class="float: left"><a href="../">Home</a></li>
				<li class="float: left"><a href="../demos/movies">Movies</a></li>
				<li class="float: left"><a href="../demos/tic-tac-toe">Game</a></li>
			</ul>
		</div>
		<div>
			<div class="div2" />
			<div class="div3">
				<slot />
			</div>
		</div>
	</div>
</body>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #2c3639;
        margin: auto auto;
        position: relative;
	}
	li {
		float: left;
	}
	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
        
	}
    li a:hover{
        background-color: #3f4e4f;
    }

	body {
		background-color: #2c3639;
		margin: 0%;
		padding: 0%;
	}
	.div1 {
		background-color: #3f4e4f;

	}
	.div2 {
	}
	.div3 {
	}
</style>
