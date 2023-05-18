
import { useState } from 'react';
import './App.css';

function App() {
  const [giohang,SetGiohang] = useState([])
  const [sanpham,setSanpham] = useState([
    {
      name: "Airpods Pro",
      price: 24900,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      qty: 10,
      heading: "Wireless Noise Cancelling Earphones",
      des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
      xem:false,
      soluong: 1
    },
    {
      name: "Apple Watch",
      price: 40900,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      qty: 15,
      heading: "You’ve never seen a watch like this",
      des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
      xem:false,
      soluong: 1
    },
    {
      name: "Macbook Pro",
      price: 199900,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      qty: 20,
      heading: "The best for the brightest",
      des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
      xem:false,
      soluong: 1
    },
    {
      name: "iPhone 11 pro",
      price: 106600,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      qty: 35,
      heading: "Pro cameras. Pro display. Pro performance",
      des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
      xem:false,
      soluong: 1
    },
    {
      name: "iPad Pro",
      price: 71900,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      qty: 25,
      heading: "Your next computer is not a computer",
      des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
      xem:false,
      soluong: 1
    }
  ])
  const handleXem = (index) =>{
    let hien = [...sanpham]
    hien[index].xem = ! hien[index].xem 
    setSanpham([...hien])
  }
  const handleDuagiohang = (index) =>{
    let addGiohang = [...sanpham]
    let addgio = ""
    addgio = addGiohang[index]
    SetGiohang([...giohang,addgio])
  }

  const handleGiam = (i) => {
    let addsoluong =[...giohang]
    addsoluong[i].soluong == 0 ? 
    (addsoluong.splice(i,1)):
    (addsoluong[i] (Number(addsoluong[i].soluong) - 1))

    SetGiohang([...addsoluong])
  }
  const handleTang = (i) => {
    let addsoluong =[...giohang]
    console.log(addsoluong[0].soluong);
    addsoluong[i]= (Number(addsoluong[i].soluong) + 1)
    SetGiohang([...addsoluong])
  }
  const handleXoa = (i) => {
    let addXoa =[...giohang]
    addXoa.splice(i,1)
    SetGiohang([...addXoa])
  } 
  const handleThanhtoan = (e) =>{
    e.preventDefault()
    let thanhtoan = [...giohang]
    thanhtoan=[]
    SetGiohang([...thanhtoan])
    alert("cảm ơn bạn đã mua hàng")
  }
const [hien,setHien] = useState(false)
//   const handleCard = () => {
//     let hienCard =[...hien]
//     hienCard = !hienCard
//     setHien([...hienCard])
//   }
  return (
    <div className="App">
      <section >
      
        <div 
        className="card" 
        // onClick={handleCard}
        ><i class="fa-solid fa-cart-shopping"></i></div><br />

        <div className='tableGio'>
          <h2>Gio Hàng Của Bạn</h2>
          <table>
          <tr>
              <th>Tên Sản Phẩm </th>
              <th>Giá Sản Phẩm</th>
              <th>Số Lượng </th>
              <th>giá Tổng</th>
              <th>Xóa</th>
          </tr>
          {giohang.map((e,i) => (
          <tbody>
              <td>{e.name}</td>
              <td>{e.price} $</td>
              <td>
                  <button className='soluong' onClick={() => handleGiam(i)}><i class="fa-solid fa-arrow-left"></i></button>
                  <span>{e.soluong}</span>
                  <button className='soluong' onClick={() => handleTang(i)}><i class="fa-solid fa-arrow-right"></i></button>
            </td>
            <td>{e.price*e.soluong}$</td>
            <td onClick={() => handleXoa(i)}><i class="fa-solid fa-eraser"></i></td>
          </tbody>))}
          </table>
        </div>
          <button onClick={handleThanhtoan}>thanh toán</button>
      </section>
      <section className='sanpham'>
        {sanpham.map((e,index) => (
        <div key={index} className='sanpham-con'>
          <div><i class="fa-brands fa-apple"></i></div>
          <div className="image-container">
          <img src={e.imageUrl}/>
          </div>
          <div>{e.name}</div>
          <div>{e.price} $</div>
          <button onClick={() => handleXem(index)} >xem chi tiết</button>
          <div className={e.xem ? "text" : "textNone"}>{e.heading}</div>
          <div className={e.xem ? "text" : "textNone"}>{e.des}</div><br />
          <button className='duagiohang' onClick={() => handleDuagiohang(index)} >
          <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>))}
    


      </section>
    </div>
  );
}

export default App;
