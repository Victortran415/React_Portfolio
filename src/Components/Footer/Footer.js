import React from "react";

const styles = {
	footer: {
		textAlign: "center",
		position: "fixed",
		bottom: "0px",
		width: "100%",
		height: "45px",
		paddingTop: "10px",
		backgroundColor: "rgba(0, 0, 0, 0.384)",
		color: "white",
	},
};

const Footer = () => {
	return (
		<footer class="footer">
			<p id="footerTag" style={styles.footer}>
				Created by Victor
			</p>
		</footer>
	);
};

export default Footer;
