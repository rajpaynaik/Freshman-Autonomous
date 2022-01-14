import React from 'react'

function loginPage(props) {
    const handleChange = (e) => {
		props.searchValue(e.target.value.trim());
	};
    return (
        <div>
        <div>
           <h1> This will be login page.</h1>
        </div>
        <form
			method="POST"
			onSubmit={(e) => {
				e.preventDefault();
			}}
			name="loginForm"
			className="loginForm"
		>
            <div class="container">
			<label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button type="submit">Login</button>
            </div>
		</form>
        </div>
    )
}

export default loginPage


