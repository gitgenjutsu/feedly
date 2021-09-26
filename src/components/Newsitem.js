import React from 'react'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardActions from '@mui/material/CardActions';

const Newsitem = (props) => {
    // let { title, description,imgUrl,newsUrl,author,date,source } = props;
    let { title, description,imgUrl,date} = props;
    return (
        <>
             <Card  sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={date}
          />
          <CardMedia
            component='img'
            height='194'
            image={imgUrl?imgUrl:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"} 
            alt='Waiting for img...'
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
            <CardActions disableSpacing>
        <IconButton aria-label="share">
          Read more <VisibilityIcon />
        </IconButton>
      </CardActions>
        </Card>
        </>
    )
}

export default Newsitem
