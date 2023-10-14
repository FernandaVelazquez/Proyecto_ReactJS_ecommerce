import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductItem = ({ item }) => {
  const { image, name, category, price, description } = item;
  
  return (
    
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={image} alt="Product Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="btn-section">
          <Button className="btn" size="large" color="secondary">
            COMPRAR
          </Button>
        </CardActions>
      </Card>
   
  );
};

export default ProductItem;
