import './ImageCard.css';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
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
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        {/* TODO add ref for avatar */}
        <div className="image-dimensions">
          <span>{width}</span>
          <span> x </span>
          <span>{height}</span>
        </div>
        <div className="user-info">
          <img className="image-avatar" alt={description} src={user.profile_image.medium} />
          <span className="user-name">{user.username}</span>
          <div className="image-description">
          { description }
        </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
