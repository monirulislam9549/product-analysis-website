import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className=''>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Context API?</Accordion.Header>
                    <Accordion.Body>
                        The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Semantic Tag?</Accordion.Header>
                    <Accordion.Body>
                        The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Difference between Inline Block and Inline Block Element?</Accordion.Header>
                    <Accordion.Body>
                        <h2>Inline Block</h2>
                        <p>The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height.</p>
                        <h2>Inline Block Element</h2>
                        <p> It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.</p>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;