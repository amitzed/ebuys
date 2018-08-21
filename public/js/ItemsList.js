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
                <h3> {item.brand} {item.product} ${item.price} </h3>
                <h3> Condition: {item.condition} </h3>
                <h3> Origin: {item.origin} </h3>
                <h3> About: {item.description} </h3>
              </td>

              <td>
                  <button className='button is-warning is-small' onClick={() =>{this.props.getItem(item); this.props.toggleState('itemIsVisible', 'itemsListIsVisible', 'editItemIsVisible')}}>Edit</button>
              </td>

              <td>
                  <button className='button is-danger is-small' onClick={() => this.props.deleteItem(item, index)}>Delete</button>
              </td>

            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
