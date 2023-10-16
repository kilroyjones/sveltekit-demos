<nav>
	<ul class="menu">
		<li class="logo"><a href="/">SvelteKit Examples</a></li>
		<li class="item"><a href="/animation">Animation</a></li>
		<li class="item"><a href="/endpoints">Endpoints</a></li>
		<li class="item"><a href="/load">Load</a></li>
	</ul>
</nav>

<style>
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	nav {
		background: #222;
		padding: 0 15px;
	}

	a {
		color: #3182bd;
		filter: brightness(4.5);
		text-decoration: none;
	}
	.menu {
		list-style-type: none;
	}
	.logo {
		font-size: 20px;
		padding: 7.5px 10px 7.5px 0;
	}
	.item {
		padding: 10px;
		font-size: 16px;
	}
	.item:not(.button) a:hover,
	.item a:hover::after {
		color: #ccc;
	}
	/* Mobile menu */
	.menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.menu li a {
		display: block;
		padding: 15px 5px;
	}
	.menu li.subitem a {
		padding: 15px;
	}
	.item {
		order: 3;
		width: 100%;
		text-align: center;
		display: none;
	}

	.menu {
		justify-content: center;
	}
	.logo {
		flex: 1;
	}
	/* Desktop menu */
	.menu {
		align-items: flex-start;
		flex-wrap: nowrap;
		background: none;
	}
	.logo {
		order: 0;
	}
	.item {
		order: 1;
		position: relative;
		display: block;
		width: auto;
	}
</style>
