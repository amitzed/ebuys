class ItemsList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.items.map((item, index) => {
          return (
            <tr>

              <td onClick={()=> { this.props.getItem(item); this.props.toggleState('itemsListIsVisible', 'itemIsVisible')}}>
                <img src={item.image} alt={item.brand} />
              </td>

              <td className='item' onClick={()=> {
                this.props.getItem(item); this.props.toggleState('itemsListIsVisible', 'itemIsVisible')}}>
                <h3> <strong>{item.brand}</strong> {item.product} <strong>$</strong>{item.price} </h3>
                <h3> <strong>Condition:</strong> {item.condition} </h3>
              </td>

              <td>
                  <button className='button is-warning is-small is-rounded' onClick={() =>{this.props.getItem(item); this.props.toggleState('itemIsVisible', 'itemsListIsVisible', 'editItemIsVisible')}}>Edit</button>
              </td>

              <td>
                  <button className='button is-dark is-small is-rounded' onClick={() => this.props.deleteItem(item, index)}>X</button>
              </td>

            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
