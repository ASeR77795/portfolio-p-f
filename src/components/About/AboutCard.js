import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';
import { CgGames } from 'react-icons/cg';
import { FaRegFileCode } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className='purple'>Pavlo Fedorenko </span>
						from <span className='purple'> Odesa, Ukraine.</span>
						<br />
						I have completed Hillel it school in Front End Development.
						<br />
						<FaArrowDown />
						<br />
						<IoSchoolOutline /> Front End Pro Courses
						<br />
						<IoSchoolOutline /> Front End Basic Courses
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className='about-activity'>
							<CgGames /> Playing Games
						</li>
						<li className='about-activity'>
							<FaRegFileCode /> Learning to code
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
