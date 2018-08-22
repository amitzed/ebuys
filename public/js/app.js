class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <div className='header'>
          <img src="images/eb-logo.jpg" alt="EB" />
        </div>
        <h1 className='title'> eBuys <br/><h6>A Wish List for the Armchair Shopaholic</h6></h1>
        <br/>
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
