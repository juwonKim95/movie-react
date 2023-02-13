import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./NewMoviePage.scss";

// div map 돌려서 뿌려줄 컴포넌트 만들기
function NewMovieList({list}) {
    const ss = {
        overflow: "hidden",
        height: "110px"
    }
    const jj ={
        fontSize: "14px",
        lineHeight: "1.6"
    }
    const ll = {
        marginTop: "20px",
        textAlign: "right"
    }
    const ff = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
    const ww = {
        height: "50px"
    }
    return (
        <div className="NewMovie">
            <Link to={`/detail/${list.mov_no}`}>
                <div className="NewMovie_img_div">
                    <img src={`${API_URL}/${list.mov_img}`} alt='' className="NewMovie_img"/>
                </div>
                <div className="NewMovie_desc" style={{...ff}}>
                    <h4 className="NewMovie_title" style={{...ww}}>{list.mov_title}</h4>
                    <div style={{...ss}}>
                        <p style={{...jj}}>{list.mov_desc}</p>
                    </div>
                    <div className="NewMovie_score" style={{...ll}}>
                        <span>평점</span> 
                        <span>{list.mov_score}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

const NewMoviePage = ({data}) => {
    return (
        <div className="inner">
            <div className='NewMovie_page'>
                <h2>최신영화 - 현재 상영작</h2>
                <div className="NewMovie_box">
                    {data.map(d => <NewMovieList key={d.mov_no} list={d}/>)}
                </div>
            </div>
        </div>
    );
};

export default NewMoviePage;