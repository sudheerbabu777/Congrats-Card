const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations </h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <p className="name">kiran V</p>
      <p className="paragraph">
        Vishnu Institute computer Education and Technology Bhimavaram{" "}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
