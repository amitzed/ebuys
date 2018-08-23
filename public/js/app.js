class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <div className='header'>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <p><img src="images/eb-logo.jpg" alt="EB" /></p>
          <br/>
          <h1 className='title'> eBuys </h1>
          <h6>A Wish List for the Armchair Shopaholic</h6>
        </div>
        <br/>
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
