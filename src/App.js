import React from 'react';
import Note from './component/Note'
import List from './component/List'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';
import './App.css';

class App extends  React.Component{
    state={
        items:[],
        id:uuid(),
        title:'',
        content:'',
        edit:false
    };
    handlechange=(e,key)=>{
        this.setState({
         [key]:e.target.value
            
        });

    };
   
    handlesubmit=(e)=>{
        e.preventDefault();
        const newItem={
            id:this.state.id,
            title:this.state.title,
            content:this.state.content
        }
        console.log(newItem);
        const updateItem=[...this.state.items,newItem];
        this.setState({
            id:uuid(),
            title:'',
            content:'',
            items:updateItem,
            edit:false
        });
    }
     handleDelete=(id)=>{
         const filteritem=this.state.items.filter(item=>item.id!==id);
         this.setState({
            items:filteritem
         });
     };
     handleUpdate=(id)=>{
        const filteritem=this.state.items.filter(item=>item.id!==id);
        const select=this.state.items.find(item=>item.id===id);
        this.setState({
           items:filteritem,
           title:select.title,
           content:select.content
        });
     };
     clearItem=(e)=>{
         this.setState({
           items:[]
         });
     };

    render(){
        return(
            <div className="container">
            <h1 className="heading" > NOTEPAD</h1>
           <Note title={this.state.title}  content={this.state.content} handlechange={this.handlechange} handlesubmit={this.handlesubmit}/>
           <List items={this.state.items} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} clearItem={this.clearItem}/>
           </div>
        );
    }
}


export default App;
