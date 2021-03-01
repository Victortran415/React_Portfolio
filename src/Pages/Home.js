import React from "react";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Column from "../Components/Column/Col";


const styles = {
	title: {
		paddingTop: "150px",
	},
	name: {
		color: "orangeRed",
		textDecoration: "underline",
	},
	test: {
		textAlign: "center",
		fontSize: "50px",
	},
};

const Home = () => {
	return (
		<Container>
			<Row>
				<Column size="md-12">
					<div style={styles.title}>
						<h1 style={styles.test}>
							Hello, my name is
							<strong style={styles.name}> Victor Tran.</strong>
						</h1>
						<h2 style={styles.test}>Welcome to my adventure of a</h2>
						<h2 style={styles.test}>Full-Stack Software Developer.</h2>
					</div>
				</Column>
			</Row>
		</Container>
	);
};

export default Home;
