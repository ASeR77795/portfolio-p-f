import React, { useState, useEffect } from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import { AiOutlineFileProtect } from 'react-icons/ai';
import certificate1 from '../../Assets/1.png';
import certificate2 from '../../Assets/2.png';
import Particle from '../Particle';

function Education() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);
	return (
		<div>
			<Container fluid className='education-section'>
				<Particle />

				<Row className='certificate' style={{ justifyContent: 'center' }}>
					<Image
						src={certificate1}
						style={{ width: `calc(${width}px - 10%)` }}
					/>
				</Row>
				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Button
						variant='primary'
						href={'#'}
						style={{ maxWidth: '250px' }}
						className='my-5'
					>
						<AiOutlineFileProtect />
						&nbsp;Visit site
					</Button>
				</Row>

				<Row className='certificate' style={{ justifyContent: 'center' }}>
					<Image
						src={certificate2}
						style={{ width: `calc(${width}px - 10%)` }}
					/>
				</Row>
				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Button
						variant='primary'
						href={'#'}
						style={{ maxWidth: '250px' }}
						className='my-5'
					>
						<AiOutlineFileProtect />
						&nbsp;Visit site
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Education;
