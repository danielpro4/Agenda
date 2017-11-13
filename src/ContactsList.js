import React, {Component} from 'react';
import classNames from 'classnames';

class ContactList extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            selectedId: 0
        });

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleClick(contact) {
        if (this.props.onItemClick) {
            this.props.onItemClick(contact);
        }

        this.setState({selectedId: contact.id});
    }

    handleCheck(e) {
        e.stopPropagation();

    }

    render() {
        return (
            <ul className="uk-list uk-list-contacts uk-list-striped">
                {
                    this.props.contacts.map((contact) => {

                        let boundItemClick = this.handleClick.bind(this, contact);

                        let className = classNames({
                            'contact-item': true,
                            selected: this.state.selectedId === contact.id
                        });

                        return (
                            <li className={className} onClick={boundItemClick} key={contact.id}>
                                <div className="uk-grid">
                                    <label><input className="uk-checkbox" onClick={this.handleCheck} type="checkbox"/></label>
                                    <div className="view-item uk-width-expand">
                                        <span className="lnr lnr-user"></span>
                                        <span>{contact.firstname} {contact.lastname}</span>
                                        <div className="uk-text-small">
                                            <span className="lnr lnr-tag"></span>
                                            {contact.email}
                                        </div>
                                    </div>


                                    <div className="uk-width-auto">
                                        <span className="uk-text-small uk-badge uk-margin-left">{contact.phone}</span>
                                    </div>


                                    <a className="uk-button-remove uk-width-auto">
                                        <span className="lnr lnr-trash"></span>
                                    </a>

                                </div>
                            </li>)
                    })
                }
            </ul>
        );
    }
}

export default ContactList;