import { useEffect, useState } from 'react';

const NewsPaper = () => {
    const [articles,setArticle] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1e7b5a8d3ec84caf90324436f42ca660')
        .then(response => response.json())
        .then(data =>setArticle(data.articles));
    },[])
    return (
        <div>
            <h1> articles {articles.length}</h1>
        </div>
    );
};

export default NewsPaper;