import React, {Component} from 'react';
import classNames from 'classnames';

class ContactCreateView extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            name: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.name.length) {
            return;
        }

        const newContact = {
            name: this.state.name,
            id: Date.now()
        };

        this.setState(prevState => ({
            contacts: prevState.contacts.concat(newContact),
            name: ''
        }));

    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <form className="uk-form-horizontal">
                <div className="uk-grid">
                    <div className="uk-width-expand">
                        <input className="uk-input"
                               onChange={this.handleChange}
                               type="text"
                               placeholder="Add Contact"
                               value={this.state.name}/>
                    </div>

                    <div className="uk-width-auto">
                        <button className="uk-button uk-button-primary  ">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ContactCreateView;

