class App extends React.Component {
  render () {
    return (
      <div className='section'>
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
