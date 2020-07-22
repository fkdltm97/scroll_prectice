import React, { useState, useEffect } from 'react'

function Bpp() {
    const [page, setPage] = useState(1);
    const [users , setUsers] = useState([]);
    const [loading, setLoading ] = useState(true);
    //숫자가 작을수록 페이지수가 늘어난다.
    
    const handleScroll = (event) => {
        const {scrollTop , clientHeight , scrollHeight } = event.currentTarget;
        
        if(scrollHeight - scrollTop === clientHeight){
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
      const loadUsers = async () => {
          setLoading(true);
          const newUsers = await getUsers(page)
          setUsers((prev) => [...prev, ...newUsers])
          setLoading(false)
      }
        loadUsers()
    }, [page])
    



    return (
        <div className='Bpp'>
            <Content onScroll={handleScroll}>
                {users && users.map((user) => <User key={user.cell} user={user}/>)}

            </Content>
            {loading && <loading>loading...</loading>}
        </div>
    )
}

export default Bpp
