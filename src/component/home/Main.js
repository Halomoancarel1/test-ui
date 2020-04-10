import React, {Component} from 'react';
import menuMakanan from './Lib/Food'


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Menu Makanan",
            title2: "Menu Minuman",
            inputValue: "",
            inputKota: ""
        }
        this.rubahData = this.rubahData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // rubahData(){
    //     this.setState({title: "Pilih Makanan"});
    // }

    rubahData(){
        this.setState((state, props) => {
            return {
                title: "Pilih Menu Makanan",
                title2: "Pilih Menu Minuman"
            };
        });
    }

    handleChange(input, e){
        //this.setState({inputValue: e.target.value});
        const a = e.target.value;
        this.setState((state, props) => {
            return{
                [input]: a
            };
        });
    }

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <button onClick={this.rubahData}>Rubah Data</button>
                <br/>
                <input type="text" 
                    value={this.state.inputValue} 
                    onChange={e => this.handleChange("inputValue", e)}
                    placeholder="Nama"
                />
                <input type="text"
                    value={this.state.inputKota}
                    placeholder="Kota"
                    onChange={e => this.handleChange("inputKota", e)}
                />

                {menuMakanan.map((value, index) => {
                    return(
                        <div key={index}>
                            <p>No: {index + 1}</p>
                            <p>Nama Makanan: {value.nama}</p>
                            <p>Harga: {value.harga}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Main;