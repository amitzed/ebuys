class Items extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      itemsListIsVisible: true,
      addItemIsVisible: false,
      itemIsVisible: false,
      editItemIsVisible: false,
      items: [],
      item: {}
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getItem = this.getItem.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount(){
    this.getItems()
  }

  deleteItem(item, index){
    fetch('items/' + item.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        items: [
          ...this.state.items.slice(0, index),
          ...this.state.items.slice(index + 1)
        ]
      })
    })
  }

  handleCreate(item){
    const updatedItems = this.state.items
    updatedItems.unshift(item)
    this.setState({items: updatedItems})
  }

  handleCreateSubmit(item){
    fetch('/items', {
      body: JSON.stringify(item),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdItem => {
      return createdItem.json()
    })
    .then(jsonedItem => {
      this.handleCreate(jsonedItem)
      this.toggleState('addItemIsVisible', 'itemsListIsVisible')
    })
    .catch(error => console.log(error))
  }

  handleUpdateSubmit(item){
    fetch('/items/' + item.id, {
      body: JSON.stringify(item),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedItem => {
      return updatedItem.json()
    })
    .then(jsonedItem => {
      this.getItems()
      this.toggleState('itemsListIsVisible', 'itemIsVisible')
    })
    .catch(error => console.log(error))
  }

  getItem( item ) {
    this.setState({item: item})
  }

  getItems(){
    fetch('/items')
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: data
      })
    }).catch(error=> console.log(error))
  }

  toggleState (st1, st2) {
  this.setState({
    [st1]: !this.state[st1],
    [st2]: !this.state[st2]
  })
}

  render() {
    return (
      <div className='items column'>
        <h2> My Items </h2>
        {this.state.itemsListIsVisible ? <button className='button is-success' onClick={()=>this.toggleState('addItemIsVisible', 'itemsListIsVisible')}>Add an Item</button> :''}
        {
          this.state.itemsListIsVisible ?
          <ItemsList
            toggleState={this.toggleState}
            items={this.state.items}
            getItem={this.getItem}
            deleteItem={this.deleteItem}
          /> : ''
        }
        {
          this.state.addItemIsVisible ?
          <ItemForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
            editItemIsVisible={this.state.editItemIsVisible}
          />
          : ''
        }
        {
          this.state.itemIsVisible ?
          <Item
            toggleState={this.toggleState}
            item={this.state.item}
            handleSubmit={this.handleUpdateSubmit}
            editItemIsVisible={this.state.editItemIsVisible}
          /> : ''
        }
      </div>
    )
  }
}
