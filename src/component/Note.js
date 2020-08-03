import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Note extends React.Component {
    render() {
        const{title,content,handlechange,handlesubmit}=this.props;
        return (
            <div className="container my-3 bg-info">
                <Card className=" container my-3 bg-info" />

                <Card.Body className="bg-primary mh-100">
                    <Card.Title>Notes</Card.Title>
                    <Card.Text>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title"  value={title} onChange={(evt)=>handlechange(evt,'title')}/>
                            <Form.Text className="text-muted">
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" placeholder="Note" value={content} onChange={(evt)=>handlechange(evt,'content')} />
                        </Form.Group>
                    </Card.Text>
                    <Button variant="danger" onClick={handlesubmit}>Submit</Button>
                </Card.Body>
            </div>

        );
    }
}


export default Note;
