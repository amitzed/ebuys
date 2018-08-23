class ItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      brand: '',
      product: '',
      description: '',
      condition: '',
      origin: '',
      price: 0,
      image: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.item){
      this.setState({
        title: this.props.item.title,
        brand: this.props.item.brand,
        product: this.props.item.product,
        description: this.props.item.description,
        condition: this.props.item.condition,
        origin: this.props.item.origin,
        price: this.props.item.price,
        image: this.props.item.image,
        id: this.props.item.id
      })
    }
  }

  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})

  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>

          <label className='label' for='title'></label>
          <div className='control'>
            <input className='input' type='text' id='title' placeholder='Title'
            onChange={this.handleChange}
              value={this.state.title}
              />
          </div>
          <br/>
          <label className='label' for='brand'></label>
          <div className='control'>
            <input className='input' type='text' id='brand' placeholder='Brand'
            onChange={this.handleChange}
              value={this.state.brand}
              />
          </div>
          <br/>
          <label className='label' for='product'></label>
          <div className='control'>
            <input className='input' type='text' id='product' placeholder='Type of Product'
            onChange={this.handleChange}
              value={this.state.product}
              />
          </div>
          <br/>
          <label className='label' for='description'></label>
          <div className='control'>
            <textarea className='textarea' type='text' id='description' placeholder='Describe Your Wish List Item'
            onChange={this.handleChange}
              value={this.state.description}
              />
          </div>

          <br/>
          <label className='label' for='condition'></label>
          <div className='control'>
            <input className='input' type='text' id='condition'  placeholder='Item Condition'
            onChange={this.handleChange}
              value={this.state.condition}
              />
          </div>

          <br/>
          <label className='label' for='origin'></label>
          <div className='control'>
            <input className='input' type='text' id='origin' placeholder='Country of Origin'
            onChange={this.handleChange}
              value={this.state.origin}
              />
          </div>
          <br/>
          <label className='label' for='price'>Price:</label>
          <div className='control'>
            <input className='input' type='number' id='price'
            onChange={this.handleChange}
              value={this.state.price}
              />
          </div>
          <br/>
          <label className='label 'for='image'></label>
          <div className='control'>
            <input className='input' type='text' id='image' placeholder='enter product image url (even a GIF!)'
            onChange={this.handleChange}
              value={this.state.image}
            />
          </div>

          <br/>
          <div className="field is-grouped">
            <div className='control'>
              <input className='button is-primary' type='submit' />
            </div>

          <br/>
          <button className="button is-text" onClick={()=> this.props.toggleState('itemsListIsVisible', 'addItemIsVisible')}>Cancel</button>
          </div>
          </form>
      </div>
    )
  }
}
