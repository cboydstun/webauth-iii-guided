import React from 'react';

const Users = (props) => {
    console.log(props.username)
    return(
        <div>
            <div className="friendName">
                <h1>{props.users}</h1>
            </div>
            <div className="friendInfo">
                {/* <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p> */}
            </div>
        </div>
    )
}

export default Users;

// export default function Friend({name, age, email}) {
//     return(
//         <div>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <p>Email: {email}</p>
//         </div>
//     )

// } 