import React from 'react';
import Logo from './Logo';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.search}>
              <TextField
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <Search className={styles.searchIcon} />
                  ),
                }}
              />
              <Button variant="contained" color="primary">
                Search
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Button color="inherit">Home</Button>
                </li>
                <li>
                  <Button color="inherit">About</Button>
                </li>
                <li>
                  <Button color="inherit">Contact</Button>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
