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

          <label className='label' for='title'><h2>Title:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='title' placeholder='Title'
            onChange={this.handleChange}
              value={this.state.title}
              />
          </div>

          <br/>
          <label className='label' for='brand'><h2>Brand:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='brand' placeholder='Brand: Select below or enter brand name'
            onChange={this.handleChange}
              value={this.state.brand}
              />
          </div>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select name="brand" id='brand'
                onChange={this.handleChange}
                  value={this.state.brand}>
                  <option value="Abercrombie">Abercrombie</option>
                  <option value="Alienware">Alienware</option>
                  <option value="BISSELL">BISSELL</option>
                  <option value="Burberry">Burberry</option>
                  <option value="Cartier">Cartier</option>
                  <option value="Coach">Coach</option>
                  <option value="Duracell">Duracell</option>
                  <option value="GUESS">GUESS</option>
                  <option value="Hermes">Hermes</option>
                  <option value="Rolex">Rolex</option>
                  <option value="Versace">Versace</option>
                  <option value="Zildjian">Zildjian</option>
                </select>
              </div>
            </div>
          </div>

          <br/>
          <label className='label' for='product'><h2>Product:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='product' placeholder='Type of Product'
            onChange={this.handleChange}
              value={this.state.product}
              />
          </div>

          <br/>
          <label className='label' for='description'><h2>Description:</h2></label>
          <div className='control'>
            <textarea className='textarea' type='text' id='description' placeholder='Describe Your Wish List Item'
            onChange={this.handleChange}
              value={this.state.description}
              />
          </div>

          <br/>
          <label className='label' for='condition'><h2>Condition:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='condition'  placeholder='Item Condition: Select below or enter item condition'
            onChange={this.handleChange}
              value={this.state.condition}
              />
          </div>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select name="condition" id='condition'
                onChange={this.handleChange}
                  value={this.state.condition}>
                  <option value="New">New</option>
                  <option value="Mint">Mint</option>
                  <option value="Used">Used</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                  <option value="For Parts">For Parts</option>
                </select>
              </div>
            </div>
          </div>


          <br/>
          <label className='label' for='origin'><h2>Origin:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='origin' placeholder='Country of Origin: Select below or enter country name'
            onChange={this.handleChange}
              value={this.state.origin}
              />
          </div>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select name="origin" id='origin'
                onChange={this.handleChange}
                  value={this.state.origin}>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Columbia">Columbia</option>
                  <option value="Israel">Israel</option>
                  <option value="China">China</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Norway">Norway</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="Vietnam">Vietnam</option>
                </select>
              </div>
            </div>
          </div>

          <br/>
          <label className='label' for='price'><h2>Price:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='price'
            onChange={this.handleChange}
              value={this.state.price}
              />
          </div>


          <br/>
          <label className='label'for='image'><h2>Image:</h2></label>
          <div className='control'>
            <input className='input' type='text' id='image' placeholder='enter product image url (even a GIF!)'
            onChange={this.handleChange}
              value={this.state.image}
            />
          </div>

          <br/>
          <div className="field is-grouped">
            <div className='control'>
              <input className='button is-primary is-rounded is-focused' type='submit' />
            </div>

          <br/>
          <button className="button is-text is-rounded is-dark" onClick={()=> this.props.toggleState('itemsListIsVisible', 'addItemIsVisible')}>CxL</button>
          </div>
          </form>
      </div>
    )
  }
}
