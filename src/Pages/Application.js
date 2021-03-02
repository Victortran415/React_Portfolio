import React from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Column from "../Components/Column/Col";
import Project1 from '../Components/Images/classheroes.gif'
import Burger from '../Components/Images/burger.gif'
import Fitness from '../Components/Images/workout.gif'
import Weather from '../Components/Images/weather.gif'
import Card from '../Components/Cards/Cards'

const Application = () => {
	return (
		<Wrapper>
			<Container>
                <h1 className='text-center'>Applications</h1>
                <Row>
                    <Column size='md-6'>
                        <Card
                        title='Class Heroes'
                        image={Project1}
                        text=""
                        repo="https://github.com/Victortran415/ClassMonsters-X-Force" 
                        link='https://class-heros.herokuapp.com/'
                        >
                        </Card>
                    </Column>
                    <Column size='md-6'>
                        <Card
                        title='Creative Cocktails'
                        image="https://media.giphy.com/media/79Iu9yjG1JFj6PA1RN/giphy.gif"
                        text=''
                        repo="https://github.com/Victortran415/Creative_Cocktails"
                        link="https://victortran415.github.io/Creative_Cocktails/"
                        >
                        </Card>
                    </Column>
                </Row>
                <br/>
                <Row>
                    <Column size='md-6'>
                        <Card
                        title='Burger App'
                        image={Burger}
                        text=''
                        repo="https://github.com/Victortran415/BurgerLogger"
                        link="https://nom-on-some-burgers.herokuapp.com/"
                        ></Card>
                    </Column>
                    <br />
                    <Column size='md-6'>
                        <Card
                        title="Password Generator"
                        image="https://media.giphy.com/media/BiXsgbpEWGYTfkCfAg/giphy.gif"
                        text=''
                        repo="https://github.com/Victortran415/Generating_a_secured_password"
                        link="https://victortran415.github.io/Generating_a_secured_password/"
                        ></Card>
                    </Column>
                </Row>
                <br/>
                <Row>
                    <Column size='md-6'>
                        <Card
                        title="Fitness Tracker"
                        image={Fitness}
                        text=''
                        repo='https://github.com/Victortran415/Workout_Tracker'
                        link='https://fwt-fitness-workout-tracker.herokuapp.com'
                        ></Card>
                    </Column>
                    <Column size='md-6'>
                        <Card
                        title="Weather App"
                        image={Weather}
                        text=''
                        repo='https://github.com/Victortran415/WeatherDashboard'
                        link='https://victortran415.github.io/WeatherDashboard/'
                        ></Card>
                    </Column>
                </Row>
            </Container>
		</Wrapper>
	);
};

export default Application;
