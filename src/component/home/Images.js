import React, {Component} from 'react';

class Images extends Component{
    render(){
        return(
            <img 
                src={this.props.linkGambar}
                alt="Gambar Makanan"
                width="500"    
            />
        )
    }
}

export default Images;