import React, { Component } from 'react';
import Images from './Images';

class List extends Component{
    render(){
        return(
            <ol>
                <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
                <li>Nasi Padang</li>
                <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                <li>Soto Lamongan</li>
                <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                <li>Sate</li>      
                <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>       
            </ol>
        );
    }
}

export default List;