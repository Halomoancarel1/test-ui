import React from 'react';


const Top = () => {
    function handlePesan(value){
        alert("Halaman Top Tampil");
        alert(value);
    }

    return (
        <a href="/" onClick={() => handlePesan('test')}>Halaman Top</a>
    )
}

export default Top;