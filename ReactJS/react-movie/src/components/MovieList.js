import React, { useEffect, useState } from 'react';
import Movieitem from './Movieitem'; //如果還是空白的就不要import 否則會出錯 // 以及檔案位置問題要確認好

// axios
import axios from 'axios';

const MovieList = () =>{
    // axios
    const [items,setitems]=useState([])


    // useEffect(()=>{ },[]);
    useEffect(()=>{
        // API KEY
        const key = "ed7edad1fad1736ffe6fe0b880f0ff20";
        // 串接api
        const getmoviedata = async()=>{
            // 很特別是用引號的 `` 不是用英文的點''
            // 這是我原本複製來的 >>> https://api.themoviedb.org/3/movie/550?api_key=ed7edad1fad1736ffe6fe0b880f0ff20
            // https://api.themoviedb.org/3/trending/all/day?api_key=ed7edad1fad1736ffe6fe0b880f0ff20
            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
            // console.log(res.data);
            console.log(res.data.results);

            setitems(res.data.results)
        };

        getmoviedata();
     },[]);

    // 原本在外的被包到裡面↑
    // // API KEY
    // const key = "ed7edad1fad1736ffe6fe0b880f0ff20";

    // // 串接api
    // const getmoviedata = async()=>{
    //     // 很特別是用引號的 `` 不是用英文的點''
    //     // 這是我原本複製來的 >>> https://api.themoviedb.org/3/movie/550?api_key=ed7edad1fad1736ffe6fe0b880f0ff20
    //     // https://api.themoviedb.org/3/trending/all/day?api_key=ed7edad1fad1736ffe6fe0b880f0ff20
    //     const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
    //     // console.log(res.data);
    //     console.log(res.data.results);
    // };

    // getmoviedata();


    return(
        <div>
            {/* <h1>this from movie list</h1> */}
            <div className="container">
                <div className="row">

                    {/* 這邊設定完之後還要去movieitem設定 */}
                    {items.map( (item)=>(
                        <Movieitem key={item.id} item={item}/>
                    ))}
                    {/* 原本在外的被包到裡面↑ */}
                    {/* <Movieitem/> */}
                </div>
            </div>
        </div>
    )
}

export default MovieList