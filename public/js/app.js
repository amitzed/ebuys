class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <div className='header'>
          <img src="images/eb-logo.jpg" alt="EB" />
        </div>
        <h1 className='title'> eBuys </h1>

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
