import React from 'react';
import ListItem from './Listitem'
import Card from 'react-bootstrap/Card'


class List extends React.Component {
    render() {
        const { items, handleDelete, handleUpdate, clearItem } = this.props
        return (
            <div>
                <h1>NOTES ARE</h1>
                {
                    items.map(item => (


                        <div className="note" key={item.id}>
                            <Card className="  container my-3 bg-info">
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <Card.Text>
                                        {item.content}
                                    </Card.Text>
                                    <button onClick={() => handleDelete(item.id)}>DELETE</button>
                                    <button onClick={() => handleUpdate(item.id)}>UPDATE</button>
                                </Card.Body>
                            </Card>

                        </div>


                    ))
                }
                {
                    <button onClick={clearItem}> Clear Item</button>
                }
            </div>
        );
    }
}


export default List;
