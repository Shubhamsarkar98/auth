import axios from "axios";
import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate=useNavigate()

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const handleapi=(e)=>{
    e.preventDefault();
    axios.post('https://reqres.in/api/login',{
      email:email,
      password:password
    }).then(re=>{
      console.log(re)
      alert('success')
      localStorage.setItem('token',re.data.token)
      navigate('/dashbord')
    }).catch(err=>{
        navigate('/sighup')
        alert('not success')
    })
  }
  return (
    <div>
 
 <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">
        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}} />
          <span className="h1 fw-bold mb-0">Pyzen</span>
        </div>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form style={{width: '23rem'}}>
            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <div className="form-outline mb-4">
              <input
               {...register("email", { required: true, maxLength: 30 })}
               type="email" id="form2Example18" value={email} onChange={(e)=>{setemail(e.target.value)}}  className="form-control form-control-lg" />

              <label className="form-label" htmlFor="form2Example18">Email address</label>
              <p
                style={{ fontSize: "12px" }}
                className="text-danger placeholder-wave placeholder-glow"
              >
                {errors.email?.type === "required" && "*email is required"}
              </p>
            </div>
            <div className="form-outline mb-4">
              <input
              {...register("email", { required: true, maxLength: 30 })}
               type="password" id="form2Example28"value={password} onChange={(e)=>{setpassword(e.target.value)}}    className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form2Example28">Password</label>
              <p
                style={{ fontSize: "12px" }}
                className="text-danger placeholder-wave placeholder-glow"
              >
                {errors.password?.type === "required" &&
                  "*password is required"}
              </p>
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="button" onClick={handleapi}>Login</button>
            </div>
            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="/sighup" className="link-info">Register here</a></p>
          </form>
        </div>
      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Login;
