import './DeleteAccount.css'

function DeleteAccount() {
    return <div className="delete-account">
        <form className="delete-account__form">
            <input className="delete-account__password-input" type="password" name="password" placeholder="Password" />
            <button>Delete account</button>
            <a className="delete-account__back-link" href="">back</a>
        </form>
    </div>
}

export default DeleteAccount