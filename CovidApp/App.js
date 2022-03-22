import './App.css';
import {Box, Paper, Typography} from "@mui/material";
import {AppBar, FormControl, Select, MenuItem} from "@mui/material";
import {Toolbar} from "@mui/material";
import {InputLabel} from "@mui/material";
import Lottie from 'react-lottie';
import {protect} from './animation';
import {useEffect, useState} from "react";
import {corona} from "./animation";
import {ArgumentAxis, Chart, ValueAxis, Animation, BarSeries, Title } from "@devexpress/dx-react-chart";
import dayjs from "dayjs";

import {useCountriesQuery, useLazyGetStatsQuery} from "./api";

function App() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [country, setCountry] = useState();
    const {data: countries, isLoading, isUninitialized} = useCountriesQuery();
    const [getStats, statuses] = useLazyGetStatsQuery;

    const handleAnimEnd = () => {
        setIsPlaying(false);
    }

    const handleChange = (e) => {
        const nextValue = e.target.value;
        setCountry(nextValue);
    }

    useEffect(() => {
        if (country) {
            getStats(country);
        }
    }, [country])

    if (isPlaying) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant="h1">Борись с заразой</Typography>

                <Lottie
                    options={{
                        animationData: protect
                    }}
                    eventListeners={[
                        {
                            eventName: 'loopComplete',
                            callback: handleAnimEnd,
                        }
                    ]}
                    height={600}
                    width={600}
                />
            </Box>
        )
    }

    if (isLoading || isUninitialized) {
        return (
            <Lottie
                options={{
                    animationData: corona
                }}
                eventListeners={[
                    {
                        eventName: 'loopLoading'
                    }
                ]}
                height={600}
                width={600}
            />
        )
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography>Ситуация по COVID-19</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Box sx={{
                    p: 2
                }}>
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth variant='standard'>
                            <InputLabel id="demo-simple-select-label">Choose country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="Country"
                                onChange={handleChange}
                            >
                                {countries.map(c => (
                                    <MenuItem key={c.Country} value={c.Slug}>{c.Country}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Paper>
                        {statuses.isSuccess && (
                            <Chart
                                data={statuses.data.map(d => ({...d, date: dayjs(d.Date).format('DD:MM')}))}
                            >
                                <ArgumentAxis/>
                                <ValueAxis/>

                                <BarSeries
                                    valueField="Cases"
                                    argumentField="date"
                                />
                                <Title text="Статистика по COVID-19"/>
                                <Animation/>
                            </Chart>
                        )}
                    </Paper>
                </Box>
            </Box>
        </>
    );
}

export default App;
