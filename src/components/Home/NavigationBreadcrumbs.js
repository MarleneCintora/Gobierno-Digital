import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from "react-router-dom";

export default function NavigationBreadcrumbs({nombre}) {

    return (
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/"  underline="hover" color="inherit" style={{textDecoration:'none', color:'#ffffff'}}>
            Pokemons
          </Link>
          <Typography color="text.primary">{nombre}</Typography>
        </Breadcrumbs>
        <Outlet/>
      </div>
    );
  }