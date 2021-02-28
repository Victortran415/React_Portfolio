import React from "react";
import styles from './NavStyles'

const Nav = () => {
	return (
        

		<nav style={styles.navbar} className="fix-top navbar navbar-expand-md navbar-dark bg-dark">
			<a style={styles.navbar} className="navbar-brand" href="./index.html">
				<i className="fa f-font"></i>VT
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active"></li>
					<li className="nav-item">
						<a style={styles.navlink} className="nav-link" href="/about">
							About
						</a>
					</li>
					<li className="nav-item">
						<a style={styles.navlink} className="nav-link" href="/application">
							Application
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
