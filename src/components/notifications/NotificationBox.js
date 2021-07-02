import React from 'react';


class NotificationBox extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.dismiss();
        }, parseInt(this.props.delay) || 2000)
    }

    render() {
        return (
            <div role="alert" className={`notification-box ${(this.props.type) ? 'notification-box--' + this.props.type : ''}`}>
                <p className="notification-box__content">{ this.props.text }</p>
            </div>
        );
    };
};

export default NotificationBox;
