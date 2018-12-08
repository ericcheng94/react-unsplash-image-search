import './ImageCard.css';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 15 + 1);

    this.setState({ spans });
  }

  render() {
    const { description, urls, user, height, width } = this.props.image;
    return (
      <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        />
        {/* TODO add ref for avatar */}
        <div className="image-dimensions">
          <span>{this.state.isHovering && width} </span>
          { this.state.isHovering && <span> × </span> }
          <span>{this.state.isHovering && height}</span>
        </div>
        <div className="user-info">
          <img
            className="image-avatar"
            src={ this.state.isHovering && user.profile_image.medium}
            alt=""
          />
          <span className="user-name">
            { this.state.isHovering && user.username}
          </span>
          <div className="image-description">
            { this.state.isHovering && description }
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
