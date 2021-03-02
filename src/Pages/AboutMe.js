import React from 'react'
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Column from "../Components/Column/Col";
import myImage from "../Components/Images/myImage/myimage.png";
import Wrapper from "../Components/Wrapper/Wrapper";


const styles = {
	img: {
		width: "300px",
		height: "300px",
	},
	aboutMe: {
		color: "whitesmoke",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		fontWeight: "bold",
		fontSize: "14px",
		border: "3px",
		borderStyle: "solid",
		borderColor: "white",
		borderRadius: "4px",
		backgroundColor: "rgba(0, 0, 0, 0.65)",
		padding: "10px",
	},
};
const AboutMe = () => {
    return (
		<Wrapper>
			<Container>
				<Row>
					<Column size="md-6">
						<div>
							<h1>About Me:</h1>
							<img style={styles.img} src={myImage} alt="in Japan" />
						</div>
					</Column>
					<Row>
						<Column size="md-8">
							<p style={styles.aboutMe}>
								Hi, my name is Victor Tran. I am born and raised in San
								Francisco, CA. If you are curious about my ethnicity, I am
								Vietnamese & Chinese. I enjoy watching sports, my favorite sport
								teams are
								<highlight style={{ color: "blue" }}>
									{" "}
									Golden State Warriors,{" "}
								</highlight>
								<highlight style={{ color: "orange" }}>
									San Francisco Giants,{" "}
								</highlight>
								<highlight style={{ color: "red" }}>
									San Francisco49ers
								</highlight>
								.<br></br>I have two beautiful domestic cats name Taco & Tyga. I
								currently work at San Francisco Marriott Marquis as a part-time
								valet for the hotel. I began my education at Skyline College,
								which I then transfer to California State University of East
								Bay. At CSUEB, I received my Bachelor of Science degree in
								Health Science with a concentration of Administration &
								Management. However, I found interest in programming and
								learning how to build applications so I've applied to a full
								stack web development bootcamp at UC Berkeley Extension.
								<br></br>
								Check out my{" "}
								<a href="/Application">
									<highlight style={{ color: "orangered" }}>
										Portfolio
									</highlight>
								</a>
							</p>
						</Column>
					</Row>
				</Row>
			</Container>
		</Wrapper>

    )
}

export default AboutMe
