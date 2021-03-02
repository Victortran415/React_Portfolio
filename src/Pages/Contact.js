import React from "react";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Column from "../Components/Column/Col";
import Resume from "../Components/Resume/VictorTran_Resume.pdf";

const styles = {
	infoList: {
		color: "whitesmoke",
		fontSize: "18px",
		paddingLeft: "5px",
	},
	fab: {
		fontSize: "60px",
		paddingLeft: "10px",
		paddingBottom: '10px',
		color: "white",
	},
	contactBox: {
		marginTop: "3rem",
		color: "whitesmoke",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		fontWeight: "bold",
		fontSize: "14px",
		border: "3px",
		borderStyle: "solid",
		borderColor: "white",
		borderRadius: "5px",
		backgroundColor: "rgba(0, 0, 0, 0.65)",
		display: 'inline-block',
		paddingRight: '15px',
		paddingLeft: '15px'
	},
	small: {
		color: "orangered",
	},
};
const Contact = () => {
	return (
		<Container>
			<Row>
				<Column size="md-5">
					<div className="card text-center" style={styles.contactBox}>
						<div className="card-body">
							<h1 className="card-title">Contact</h1>
							<div className="row">
								<form action="" style={{ display: "inline-block" }}
									>
									<div
										className="form-group"
										>
										<label for="enterFullName">Full Name: *</label>
										<input
											type="name"
											className="form-control"
											required="required"
											data-error="Please, leave us a message."
										/>

										<label for="exampleInputEmail1">Email Address: *</label>
										<input
											type="email"
											className="form-control"
											required="required"
											data-error="Please, leave us a message."
										/>
										<small className="form-text text-muted">
											<highlight style={{ color: "orange" }}>
												Email will not be shared to anyone.
											</highlight>
										</small>

										<label for="enterPhoneNumber">Phone Number:</label>
										<input type="email" className="form-control" />
										<small className="form-text text-muted">
											<highlight style={{ color: "orange" }}>
												(optional)
											</highlight>
										</small>

										<label for="form_message">Message: *</label>
										<textarea
											id="form_message"
											name="message"
											className="form-control"
											placeholder="Type Message Here *"
											rows="4"
											required="required"
											data-error="Please, leave us a message."
										></textarea>
										<div className="help-block with-errors"></div>
										<button type="submit" className="btn btn-primary">
										Submit
									</button>
									</div>
									
								</form>
							</div>
						</div>
					</div>
				</Column>
				<Column size="md-7">
					<div style={styles.contactBox}>
						<div className="text-center">
							<h2>Need to get in touch?</h2>
							<p style={{paddingRight: '100px', paddingLeft: '100px'}}>Don't hesitate to reach out if you have any questions. Feel free to contact me to discuss about project collab, feedbacks on previous projects, or if you just want to say hello.  </p>
							</div>
						
						<p style={styles.infoList}>
						<i className="fab fa-envelope-o" aria-hidden="true"></i>
							
							<i style={styles.fab} className="far fa-envelope"></i>Victortran415@gmail.com
						</p>
						<p style={styles.infoList}>
						<i style={styles.fab} className="fas fa-phone-alt"></i>
							(415)-248-6520
						</p>
						<a
							href={Resume}
							download=""
							style={styles.infoList}
							id="updateResume">
							<i style={styles.fab} className="fas fa-file-download"></i> Resume
						</a>
						<br></br>
						
						<a
						href="https://www.linkedin.com/in/victor-tran-927388157/">
						<i style={styles.fab} className="fab fa-linkedin"> LinkedIn</i>
					</a>
					<br></br>

					<a href="https://github.com/Victortran415" class="links">
						<i style={styles.fab} className="fab fa-github-square"><span> GitHub</span></i>
					</a>
					</div>
					
				</Column>
			</Row>
		</Container>
	);
};

export default Contact;
