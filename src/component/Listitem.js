import React from 'react';
import Card from 'react-bootstrap/Card'



class ListItem extends  React.Component{
    render(){
        return(
            <div>
                {
                <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>NOTES</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text>
     
    </Card.Text>
    <button>DELETE</button>
    <button>UPDATE</button>
  </Card.Body>
</Card>
    }
            </div>
        );
    }
}


export default ListItem;
