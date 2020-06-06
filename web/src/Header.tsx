import React from 'react';

interface HeaderProps{
    title: String;
}

const  Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <h1>Coleta de Lixo</h1>
        </header>
    );
}


export default Header;