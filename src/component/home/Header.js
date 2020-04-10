import React, { Component } from 'react';
import './Header.css';
const judul = {
  color: "orange",
  backgroundColor: "blue"
}

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar Makanan Nusantara",
      statusRendering: true
    }
    //fungsinya kalo mau ambil data dari props atau state, harus pake ini, kalo ga panggil props atau state, ga perlu masukin ke sini
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault();
    alert('test handle Pesan')
    alert(value);
  }

  handleElement(){
    this.setState((state, props) => {
      return {statusRendering: !state.statusRendering};
    });
  }
 
    render(){
      return (
        <div>
          {this.state.statusRendering === true ? (
            <div>
              <h1 style={{color: "blue", backgroundColor: "orange"}}>Selamat Datang</h1>
              <h2 style={judul}>Silahkan Pilih Makanan</h2>
            </div>
          ):(
            <div>
              <h1 id="judulKedua">Selamat Tinggal</h1>
              <h2 className="judulInfo">Jangan Lupa Datang Kembali</h2>
            </div>
          )}
          <button onClick={this.handleElement}>Rubah</button>
        </div>
      )
      // return (
      //   <div>
      //     <h2>Makanan Khas Indonesia</h2>
      //     <p>{this.state.daftar}</p>
      //     <a href="/" onClick={(e) => this.handlePesan("test get header", e)}>Halaman Header</a>
      //   </div>
      // );
    }
  }

  export default Header;