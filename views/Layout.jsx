var React = require('react');

//Header/navbar layout
class Layout extends React.Component {
  render() {

    return (
    <html>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      <link rel="stylesheet" href="style.css"/>
      <link href="https://fonts.googleapis.com/css?family=Cookie&display=swap" rel="stylesheet"/>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <a class="navbar-brand" href="/" id = "app-name">Recipe Keeper</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
               <a class="nav-link" href="/recipes">Recipes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/recipes/new">Submit</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <body>
        <div className = "container" >
        <p id = "text"></p>
        </div>
      </body>
    </html>
      );
  }
}

module.exports = Layout;