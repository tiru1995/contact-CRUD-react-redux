import React from 'react'
const Createuser=(props)=>{
return(
    <div>
            <form onSubmit={props.submituser}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" name="name" type="text" onChange={props.onChangeHandler} value={props.user?props.user.name:EventTarget.value}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Area">Address</label>
                    <input className="form-control" name="Area" type="text"  onChange={props.onChangeHandler} value={props.user?props.user.Area:EventTarget.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input className="form-control" name="Phone" type="text"  onChange={props.onChangeHandler} value={props.user?props.user.Phone:EventTarget.value}/>
                </div>
                <button className="btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-danger" >Clear</button>                
            </form>

    </div>
)
}

export default Createuser
