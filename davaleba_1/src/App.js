import React from 'react';
import './App.css';
import Navbar from './Includes/Nav'
import Carousels from './Includes/Carousel';
import Items from './Components/Items/Items';
import Insert from './Includes/Insert';


class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      ProductList: [
        { title: 'სკამი 1', image: '../Images/Items/skami_1.jpg', catId: 1 },
        { title: 'სკამი 2', image: '../Images/Items/skami_2.jpg', catId: 1 },
        { title: 'სკამი 3', image: '../Images/Items/skami_3.jpg', catId: 1 },
        { title: 'სკამი 4', image: '../Images/Items/skami_4.jpg', catId: 1 },
        { title: 'სავარძელი 1', image: '../Images/Items/savardzeli_1.jpg', catId: 2 },
        { title: 'სავარძელი 2', image: '../Images/Items/savardzeli_2.jpg', catId: 2 },
        { title: 'დეკორაცია 1', image: '../Images/Items/dekoracia_1.jpg', catId: 3 }
      ],
      selectedCategoryId: 0
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.appendDataInItemList = this.appendDataInItemList.bind(this);
  }


  CarouselImages = [
    { imageSrc: '../Images/Carousel/banner1.jpg', title: 'პირველი სურათი'},
    { imageSrc: '../Images/Carousel/banner2.jpg', title: 'მეორე სურათი' }
  ]
    
  CategoryList = [
    { catTitle: 'მთავარი', catId: 0},
    { catTitle: 'სკამი', catId: 1},
    { catTitle: 'სავარძელი', catId: 2},
    { catTitle: 'დეკორაცია', catId: 3},
    { catTitle: 'პიჯაკი', catId: 4},
    { catTitle: 'საათი', catId: 5},
  ]
  

  onSelectCategory(id) {
    this.setState({
      selectedCategoryId: id
    });
  }

  appendDataInItemList(obj)
  {
    this.setState({ ProductList: [...this.state.ProductList, obj ] }) 
    console.log(this.state.ProductList);

    //აქ არის შესაცვლელი რაღაც
  }
  

  render()
  {
    return (
      <div className="mainBg">
        <Navbar cats={this.CategoryList} onSelectCategory={this.onSelectCategory}/>
        <Carousels images={this.CarouselImages} />
        <Insert catList={this.CategoryList} itemsList={this.state.ProductList} appendDataInItemList={this.appendDataInItemList}/>
        <Items itemsList={this.state.ProductList} catList={this.CategoryList} selectedCategoryId={this.state.selectedCategoryId} />
      </div>
    );
  }

}

export default App;
