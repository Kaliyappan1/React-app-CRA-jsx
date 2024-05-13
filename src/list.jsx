function List() {
    const Fruits = [
        {id: 1, name: "apple", price: 150},
        {id: 2,name: "orange", price: 200},
        {id: 3,name: "banana", price: 300},
        {id: 4,name: "grapics", price: 120}

    ]
    // Fruits.sort((a, b) => a.name.localeCompare(b.name))//alphabetical
    // Fruits.sort((a, b) => a.price - b.price)// numeric 

    // const prices = Fruits.filter(fruit => fruit.price < 300) // low price
    const prices = Fruits.filter(fruit => fruit.price >= 160)  

    const FruitList = prices.map (fruits => <li key={fruits.id}>{fruits.name}: &nbsp; <b>{fruits.price}</b></li>)

    return (<ul>{FruitList}</ul>)
}

export default List;