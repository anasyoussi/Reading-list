import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

class BookList extends Component {  
    render() { 
        return (
            <ThemeContext.Consumer> 
                { (context) => {
                const { isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark; 
                return (
                    <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                        <ul>
                            <li style={{background: theme.ui}}>Unplagged Alpha</li>
                            <li style={{background: theme.ui}}>The rational man</li>
                            <li style={{background: theme.ui}}>Bla bla</li>
                        </ul>
                   </div>
                )
                }} 
            </ThemeContext.Consumer> 
        )
    }
}

export default BookList
