import './Input.sass'

function Input({type='text', name={name}, placeholder = '',defaultValue }) {

return <>
<input className='input' type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} />
</>

}


export default Input