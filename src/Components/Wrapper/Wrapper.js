import React from "react";

const styles = {
    paddingTop: "40px",
}


const Wrapper = (props) => {
	return <main className="wrapper" style={styles}>{props.children}</main>;
};

export default Wrapper;
