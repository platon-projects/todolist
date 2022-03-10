import React from "react";
import PropTypes from 'prop-types'
const styles = {
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight: '1rem'
    }
}
function TodoItem({todo,index,onChange}){
    const classes= [];
    if(todo.complete){
        classes.push('done');
    }
    return(
       
       <li style={styles.li}>
        <span className={classes.join(' ')}>
        <input type="checkbox" 
        checked={todo.complete} 
        onChange={()=>{onChange(todo.id)}}/>
        &nbsp;	
            <strong>
                {index+1})
            </strong>
        
            {todo.title}
       
        </span>
        <button className="rm">&#10006;</button>
        </li>
    )
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem;