import React from 'react';
import Card from 'react-bootstrap/Card';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';
import { CgGames } from 'react-icons/cg';
import { CgGym } from 'react-icons/cg';
import { BsBook } from 'react-icons/bs';
import { PiFlagCheckeredDuotone } from 'react-icons/pi';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className='purple'>Pavlo Fedorenko </span>
						from <span className='purple'> Odesa, Ukraine.</span>
						<br />I have completed Hillel it school in Front End Development.
						<br /> Currently, I'm based in New York City.
						<div style={{ padding: '1rem', paddingLeft: '2rem' }}>
							<FaArrowDown />
						</div>
						<IoSchoolOutline /> Front End Pro Courses{' '}
						<span className='purple number' style={{ marginLeft: '10px' }}>
							{' '}
							03.2023
						</span>{' '}
						<PiFlagCheckeredDuotone />
						<br />
						<IoSchoolOutline /> Front End Basic Courses{' '}
						<span
							className='purple number'
							style={{
								marginLeft: ' 10px',
							}}
						>
							09.2022
						</span>{' '}
						<PiFlagCheckeredDuotone />
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className='about-activity'>
							<CgGames /> Playing Games
						</li>
						<li className='about-activity'>
							<CgGym /> Sports
						</li>
						<li className='about-activity'>
							<BsBook /> Reading
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Adapting, Evolving, Succeeding:
						<br /> Navigating Life's Code with Creativity and Resilience."{' '}
					</p>
					<footer className='blockquote-footer'>PF</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
