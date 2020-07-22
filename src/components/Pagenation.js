// 아래 페이지 네이션을 만드는 컴포넌트

import React from 'react'

const Pagenation = ( {postsPerPage , totalPosts , pageinate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <nav>
            <ul className="pagenation">
                {pageNumbers.map(number => (
                    <li key = {number} className="page=item">
                        <a onClick={()=>pageinate(number)} href="!#" className="page-link">
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagenation