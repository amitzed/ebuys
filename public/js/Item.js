class Item extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src={this.props.item.image} alt={this.props.item.brand}
              />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Brand:</span> {this.props.item.brand} </h3>
              <p className='tile is-child box'><span>Product:</span> {this.props.item.product} </p>
              <p className='tile is-child box'><span>Description:</span><br/> {this.props.item.description} </p>
              <p className='tile is-child box'><span>Price: $</span>{this.props.item.price} </p>

            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-primary is-inverted is-rounded' onClick={()=> this.props.toggleState('itemsListIsVisible', 'itemIsVisible')}>View All Your Items</button>
          </div>
          </div>
          </div>
          <ItemForm item={this.props.item}
          toggleState={this.props.toggleState}
          handleSubmit={this.props.handleSubmit}
          editItemIsVisible={this.props.editItemIsVisible}
          />
        </div>
      )
  }
}
