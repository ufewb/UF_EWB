// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper, Box } from '@mui/material';
import nepalTeams from '../../assets/home/nepal_teams.jpg';
import peruTeams from '../../assets/home/peru_teams.jpg';

function ProjectsHome() {
  return (
    <div id="projects">
      {/* Home Image Section */}
      <Box 
        sx={{
          textAlign: 'center', 
          position: 'relative', 
          marginTop: 0
        }}
      >
        <Typography variant="h2" sx={{ color: '#333', fontSize: '4em' , fontWeight: 'bold', color: '#075ba7'}} className="home-title">
          OUR PROJECTS
        </Typography>
        <img src="your-home-main-image.jpg" alt="Home Main" className="homeMainImage" style={{ width: '100%', height: 'auto'}} />
      </Box>

      {/* Teams Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: '#075ba7' }}>
            <img 
              src={nepalTeams} 
              alt="Nepal Team" 
              style={{ width: '450px', height: '350px', objectFit: 'cover', borderRadius: '6px' }} 
              className="team_img"
            />
            <Link to="/nepal" className="team_click underline-hover fade-in">
              <Typography variant="h6" sx={{ color: '#f8f8f8', marginTop: '20px', fontSize: '2em' }}>NEPAL</Typography>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: '#075ba7' }}>
            <img 
              src={peruTeams} 
              alt="Peru Team" 
              style={{ width: '450px', height: '350px', objectFit: 'cover', borderRadius: '6px' }} 
              className="team_img"
            />
            <Link to="/peru" className="team_click underline-hover fade-in">
              <Typography variant="h6" sx={{ color: '#f8f8f8', marginTop: '20px', fontSize: '2em' }}>PERU</Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
{/* 
      <Typography variant="h4" sx={{ color: '#075ba7', textAlign: 'center', letterSpacing: '0.02em', marginTop: '50px' }}>
        SPONSORS
      </Typography>

      <Box
        sx={{
          marginTop: '50px',
          backgroundColor: '#075ba7',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={4}>
            <img src="sponsor1.jpg" alt="Sponsor 1" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)' }} />
          </Grid>
          <Grid item xs={4}>
            <img src="sponsor2.jpg" alt="Sponsor 2" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)' }} />
          </Grid>
          <Grid item xs={4}>
            <img src="sponsor3.jpg" alt="Sponsor 3" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)' }} />
          </Grid>
        </Grid> 
      </Box>*/}
    </div>
  );
}

export default ProjectsHome;
