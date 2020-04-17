

import React, { Component } from 'react'
// const MyContext = React.createContext();
export default class NameForm extends Component {
    constructor() {
        super();
        
        this.state = {
            thisData: [],
            value: ""
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        
        handleChange(event){
            console.log(event.target.value);
            this.setState({value: event.target.value});
        }

        handleSubmit(event){
           // alert('A name was submitted: ' + this.state.value);
            console.log(this.props.data);

            this.setState({
                thisData: this.props.data,
              })

            event.preventDefault();
        }

    render() {


        let searchTerm = this.state.value;

        console.log(searchTerm);

        let filterResult = this.state.thisData.filter(item =>item.author.toLowerCase().includes(searchTerm.toLowerCase()));

        console.log(filterResult);

        return (
            <div>


            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} /> 
                       
                    </label>
                        <input type="submit" value="Search" />
                </form>
            </div>



            

             <div> 

              {filterResult.map(same => {
             return <div > 
                {same.author}
                <img src={same.download_url}></img>
                  </div>
                                        })} 
                    </div>
                 
              </div>  

            
        )
    }
}

