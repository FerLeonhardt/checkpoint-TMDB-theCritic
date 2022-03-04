

const expelledUser= (history)=>{
    localStorage.removeItem('token')
    history.push('/')
}

