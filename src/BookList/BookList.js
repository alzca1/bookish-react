import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

export default function BookList({ books, loading, error }) {
 

  const classes = useStyles();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <div data-test="book-list" className={classes.root}>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={4} sm={4} key={book.id} className="book-item">
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.name}
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`/books/${book.id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
