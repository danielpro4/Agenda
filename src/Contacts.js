import React, {Component} from 'react';
import ContactList from './ContactsList';
import axios from 'axios';

class Contacts extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            contacts: [],
            query: '',
            selected: null
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

        axios.get('http://192.168.0.4:3000/contacts.json', null).then((response) => {
            this.setState({
                contacts: response.data
            });
        });
    }


    handleClick() {
        console.log(this);
    }

    handleChange(e) {
        this.setState({query: e.target.value});
    }

    handleSearch(e) {
        e.preventDefault();

        console.log(this.state.query);
    }

    handleItemClick(contact) {
        this.setState({ selected: contact });
    }

    render() {
        return (
            <div>
                <form className="uk-form-horizontal" onSubmit={this.handleSearch}>
                    <div className="uk-grid">
                        <div className="uk-width-expand">
                            <input className="uk-input"
                               onChange={this.handleChange}
                               type="text"
                               placeholder="Search Contact..."
                               value={this.state.query}/>
                        </div>

                        <div className="uk-width-auto">
                            <button className="uk-button uk-button-primary">Search</button>
                        </div>
                    </div>
                </form>

                <ContactList onItemClick={this.handleItemClick} contacts={this.state.contacts}></ContactList>

            </div>
        );
    }
}


export default Contacts;