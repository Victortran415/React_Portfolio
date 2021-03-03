import React from "react";

const styles = {
	navbar: {
		backgroundColor: "rgba(0, 0, 0, 0.384)",
		fontSize: "30px",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		position: "fixed",
		width: "100%",
	},
	navlink: {
		fontSize: "20px",
		marginRight: "15px",
		color: 'white',
		fontFamily: 'Verdana'
	},
};

const Nav = () => {
	return (
		<nav
			style={styles.navbar}
			className="fix-top navbar navbar-expand-md ">
			<a className="navbar-brand" href="/">
				<i style={styles.navlink}className="fa f-font">VT</i>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active"></li>
					<li className="nav-item">
						<a style={styles.navlink} className="nav-link" href="/AboutMe">
							About Me
						</a>
					</li>
					<li className="nav-item">
						<a style={styles.navlink} className="nav-link" href="/Applications">
							Applications
						</a>
					</li>
					<li className="nav-item">
						<a style={styles.navlink} className="nav-link" href="/Contact">
							Contact
						</a>
					</li>
					
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
