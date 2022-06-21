import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';

const News = (props) => {
    console.log(props)
    const { title,urlToImage,description,author,} = props.article;
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            action={
                <IconButton aria-label="settings">
                </IconButton>
            }
            title={title}
            subheader={author}
            />
            <CardMedia
            component="img"
            height="194"
            image={urlToImage}
            alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            </CardContent>
        </Card>
    );
};

export default News;