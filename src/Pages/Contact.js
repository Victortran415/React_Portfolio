import React from "react";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Column from "../Components/Column/Col";
import Wrapper from "../Components/Wrapper/Wrapper";
import Resume from "../Components/Resume/VictorTran_Resume.pdf";

const styles = {
	infoList: {
		color: "whitesmoke",
		fontSize: "18px",
		paddingLeft: "5px",
	},
	fab: {
		fontSize: '60px',
		paddingLeft: '10px',
		color: 'white',
	}
};
const Contact = () => {
	return (
		<Wrapper>
			<Container>
				<Row>
					<Column size="md=6">
						<div>
							<p style={styles.infoList}>
								<strong style={{ color: "orangered" }}>Email:</strong>{" "}
								Victortran415@gmail.com
							</p>
							<p style={styles.infoList}>
								<strong style={{ color: "orangered" }}>Phone:</strong>{" "}
								(415)-248-6520
							</p>
							<a
								href={Resume}
								download=""
								style={styles.infoList}
								id="updateResume"
							>
								<strong style={{ color: "orangered" }}>Download:</strong>{" "}
								Resume
							</a>
						</div>
						<a
							href="https://www.linkedin.com/in/victor-tran-927388157/"
							class="links"
						>
							<i style={styles.fab} className="fab fa-linkedin" ></i>
						</a>

						<a href="https://github.com/Victortran415" class="links">
							<i style={styles.fab} className="fab fa-github-square"></i>
						</a>
					</Column>
				</Row>
			</Container>
		</Wrapper>
	);
};

export default Contact;
