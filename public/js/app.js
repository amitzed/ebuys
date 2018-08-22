class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <div className='header'>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <p><img src="images/eb-logo.jpg" alt="EB" /></p>
        </div>
        <br/>
        <h1 className='title'> eBuys <br/><h6>A Wish List for the Armchair Shopaholic</h6></h1>
        <br/>

        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>

        <div className='columns'>
        <Items />

        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
