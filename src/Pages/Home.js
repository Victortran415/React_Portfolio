import React from "react";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Column from "../Components/Column/Col";
import { useHistory } from "react-router-dom";

const styles = {
	title: {
		paddingTop: "150px",
	},
	test: {
		textAlign: "center",
		fontSize: "35px",
		color: 'black',
		fontFamily: 'Arial',
		fontWeight: 'bold'
	},
	btn: {
		paddingTop: "50px",
		textAlign: "center",
	},
	btnStyle: {
		borderColor: "white",
		borderWidth: '2px',
		fontFamily: "Arial",
		fontSize: '22px',
		backgroundColor: "rgba(0, 0, 0, 0.65)",
	},
};

const Home = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push("/Applications");
	};
	return (
		<Container>
			<Row>
				<Column size="md-12">
					<div style={styles.title}>
						<h1 style={styles.test}>
							Hi, I'm
							Victor Tran.
						</h1>
						<h2 style={styles.test}>a Full-Stack Software Developer from San Francisco</h2>
						<h2 style={styles.test}></h2>
					</div>
					<div style={styles.btn}>
						<button style={styles.btnStyle}
							className="btn btn-primary btn js-scroll px-4 btnzz"
							onClick={handleClick}
						>
							<span>View My Apps</span>
						</button>
					</div>
				</Column>
			</Row>
		</Container>
	);
};

export default Home;
