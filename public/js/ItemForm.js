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
        <form>
          <label className='label' for='title'>Title:</label>
          <div className='control'>
            <input className='input' type='text' id='title'/>
          </div>

          <label className='label' for='brand'>Brand:</label>
          <div className='control'>
            <input className='input' type='text' id='brand'/>
          </div>

          <label className='label' for='product'>Product:</label>
          <div className='control'>
            <input className='input' type='text' id='product'/>
          </div>

          <label className='label' for='description'>Description:</label>
          <div className='control'>
            <input className='input' type='text' id='description'/>
          </div>

          <label className='label' for='condition'>Condition:</label>
          <div className='control'>
            <input className='input' type='text' id='condition'/>
          </div>

          <label className='label' for='origin'>Country Origin:</label>
          <div className='control'>
            <input className='input' type='text' id='origin'/>
          </div>

          <label className='label' for='price'>Price:</label>
          <div className='control'>
            <input className='input' type='number' id='price'/>
          </div>

          <label className='label 'for='image'>Image</label>
          <div className='control'>
            <input className='input' type='text' id='image'/>
          </div>

          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
        <button className="button is-link">Cancel</button>
      </div>
    )
  }
}
