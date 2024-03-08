import { Button } from "@mui/material";
import axios from "axios";

function Login({store}) {

    function handleLogin(event) {
        alert(document.getElementsByName('un')[0].value);
        event.preventDefault();
        axios.post('http://localhost:8081/check', {
            un: document.getElementsByName('un')[0].value,
            pw: document.getElementsByName('pw')[0].value
        }).then((res)=> {
            console.log(res.data);
            if(res.data.msg != "failed") {
                store.dispatch({"type":"login", data:{"un":res.data.msg.name, "role":res.data.msg.role, "token":res.data.token}})
            }
        })
    }

    function handleCancle() {
        document.getElementsByName("un")[0].value=""
        document.getElementsByName("pw")[0].value=""
    }

    return(
        <div className="login-parent">
            <div className="login-child">
            <p style = {{ textShadow: "1px 2px 3px yellow, -1px -2px 2px red", fontSize: "25px" }}> Login </p> <br/>
            <form>
                Username: <input type="text" name="un" /> <br/><br/>
                Password: <input type="password" name="pw" /> <br/><br />
                <button onClick={handleLogin}> Login </button>
                <button onClick={handleCancle}>cancle</button>
            </form>
            </div>
        </div>
    );
}

export default Login