import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import News from '../News/News';

const NewsPaper = () => {
    const [articles,setArticle] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1e7b5a8d3ec84caf90324436f42ca660')
        .then(response => response.json())
        .then(data =>setArticle(data.articles));
    },[])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                articles.map(article =><Grid item xs={2} sm={4} md={4}>
                    <News article={article}></News>
                    </Grid>)
                }
        </Grid>
    </Box>
        </div>
    );
};

export default NewsPaper;