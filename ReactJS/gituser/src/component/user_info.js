import React, { useEffect, useState } from 'react'
import './_user_info.scss'
import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { selectUserList } from '../store/api_user_list'
// import { selectUserDetail } from '../store/api_user_detail'

const User_Info = () =>{

    // const uList = useSelector(selectUserList)
    // const uDetail = useSelector(selectUserList)


    const [arr_list, setArr_list] = useState()
    const [arr_detail, setArr_detail] = useState()
    function get_user_list(){
        axios({url:'https://api.github.com/users',})
        .then((user_list)=>{
            let list = []
            for (let i = 0; user_list.data.length<100? i<user_list.data.length: i<100; i++){
                list.push(user_list.data[i])
            }
            setArr_list(list)
        })
        .catch((err)=>{ console.log(err) })
    }

    function get_user_detail(){
        let list = []
        arr_list.map((user_detail)=>{
            axios({url:`https://api.github.com/users/${user_detail.login}`})
            .then((res)=>{
                list.push(res.data)
            })
            .catch((err)=>{console.log(err)})
        })
        setArr_detail(list)
    }

    let _detail_html;
    if(arr_detail){
        _detail_html = arr_detail.map((res, key)=>{
            return <div key={key} className="container">
                <div className='item'>
                    <div className='item--title'>login</div>
                    <div className='item--content'>{res.login}</div>
                </div>
                <div className="item">
                    <div className='item--title'>avatar_url</div>
                    <div className='item--content'>{res.avatar_url}</div>
                </div>
                <div className="item">
                    <div className='item--title'>bio</div>
                    <div className='item--content'>{res.bio? res.bio: "null"}</div>
                </div>
                <div className="item">
                    <div className='item--title'>blog</div>
                    <div className='item--content'>{res.blog? res.blog: "null"}</div>
                </div>
                <div className="item">
                    <div className='item--title'>location</div>
                    <div className='item--content'>{res.location? res.location: "null"}</div>
                </div>
                <div className="item">
                    <div className='item--title'>name</div>
                    <div className='item--content'>{res.name? res.name: "null"}</div>
                </div>
                <div className="item">
                    <div className='item--title'>site_admin</div>
                    <div className='item--content'>{JSON.stringify(res.site_admin)}</div>
                </div>
            </div>
        })
    }

    useEffect(()=>{
        get_user_list();
        get_user_detail()
    },[])
    return(
        <>
        {_detail_html}
        </>
    )
}

export default User_Info