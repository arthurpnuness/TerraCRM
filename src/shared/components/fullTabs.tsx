import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

interface ITabsProps {
    tabs: string[];
    tabsPanel: JSX.Element[];
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 3, overflow: 'auto', maxHeight: '70vh' }}>{children}</Box>
            )}
        </div>
    );
}

function a11yProps(index: number, text: string) {
    return {
        id: `full-width-tab-${text}-${index}`,
        'aria-controls': `full-width-tabpanel-${text}-${index}`,
    };
}

export default function FullWidthTabs({ tabs, tabsPanel }: ITabsProps) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event);
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        console.log(index);
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%', padding: 0 }}>
            <AppBar position='sticky' sx={{ width: '100%', margin: 0, backgroundColor: 'inherit' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        color: 'gray',
                        '&.Mui-selected': {
                            color: '#d32f2f',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#d32f2f',
                        },
                    }}
                    variant='fullWidth'
                    aria-label='full width tabs example'
                >
                    {tabs.map((t, i) => (
                        <Tab
                            key={i}
                            label={t}
                            {...a11yProps(i, t)}
                            sx={{
                                color: 'gray',
                                '&.Mui-selected': {
                                    color: '#d32f2f',
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {tabsPanel.map((element, index) => (
                    <TabPanel value={value} index={index} dir={theme.direction}>
                        {element}
                    </TabPanel>
                ))}
            </SwipeableViews>
        </Box>
    );
}
