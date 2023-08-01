import React from 'react'

const GithubUsers = () => {
  return (
    <div className='--bg-primary --py2'>
        <div className="container">
            <header>
                <h1 className='--text-center --text-light'>GitHub Users</h1>
                <div className="--line"></div>
            </header>
            <div className="--grid-25 --py">
                <div className="--card --bg-light --p --flex-start">
                    <img src="" alt="image"  className='--profile-img --mx'/>
                    <span>
                        <h4>Zino</h4>
                        <a href="">View Profile</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GithubUsers