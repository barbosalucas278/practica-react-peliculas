import React, { Component } from "react";
import "../style/artist-card.css";
class ArtistCard extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="item">
          <img
            src="https://lh3.googleusercontent.com/proxy/YfC6S5wZ4ocWvt7dzQUz4nzh0WXjL8knY5MmiZ9ZZpQg9phZHFxqX-qRsADakH6rVQjfjhaHpUQ0VvUHoHU8nJtR5-fBlt4q8F1YuGIqlFdqc5BHxgYfQT5HPiTMyL3x"
            alt="Imagen de Iron Man 1"
            className="pic"
          />
          <p className="titulo">Iron Man 1</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
