import React, { PropTypes } from 'react';

class Sidebar extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }
  static defaultProps = {
    data: {}
  }
  
  render () {
    const data = this.props.data;
    return(
      <nav className="holygrail-nav u-textCenter">
        {
          (data && data.messages)
            ? data.messages.map((message, i) => <p key={i}>{message}</p>)
            : ''
        }
        {
          (data && data.promoButton)
            ? <a href={data.promoButton.url}
                className="button success">{data.promoButton.label}</a>
            : ''
        }
        {this.props.children}
      </nav>
    );
  }
}

export default Sidebar;
