import BusinessIcon from '@mui/icons-material/Business';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { AppBar, Autocomplete, Button, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

export default function Styles() {
    const cities = ['Delhi','Kovai','Chennai']
    const [val, setval] = useState<string|null>(null);
return (
    <div>
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <LocalAirportIcon/>
                        <FlightLandIcon/>
                        <BusinessIcon/>
                    </IconButton>
                    <Typography variant='h5' sx={{flexGrow:1}}>Boeing</Typography>
                    <Stack direction='row' spacing={3}>
                        <Button variant='outlined' color='inherit'>Home</Button>
                        <Button variant='outlined' color='inherit'>About</Button>
                        <Button variant='text' color='inherit'>Service</Button>
                        <Button variant='contained' color='inherit'>Contact</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
        <div style={{marginTop:"75px"}}>
            <TextField variant='outlined' color='error' label='Name'/>
            <TextField variant='filled' color='warning' label='Name'/>
            <TextField variant='standard' color='success' label='Name'/>
            <Autocomplete
                options={cities}
                renderInput={params =><TextField {...params} label = "Cities"/>}
                value = {val}
                onChange={(event:any,newValue:string|null)=>{console.log({newValue});setval(newValue);}
                }
                freeSolo
            />
        </div>
    </div>
)
}
