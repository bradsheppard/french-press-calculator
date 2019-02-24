import { createMuiTheme, createStyles, MuiThemeProvider, withStyles, WithStyles } from "@material-ui/core";
import * as React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron';
import Main from './components/main';
import Top from './components/top';

const styles = () => createStyles({
    root: {
        flexGrow: 1,
    }
});

const theme = createMuiTheme({
    palette: {
        primary: { main: 'rgb(110, 110, 110)' },
        secondary: { main: 'rgb(110, 110, 110)' }
    },
    typography: {
        fontFamily: [
            'Roboto Condensed'
        ].join(','),
        useNextVariants: true
    }
});

interface IProps extends WithStyles<typeof styles> {}

class App extends React.Component<IProps> {
    public render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Top/>
                    <Jumbotron/>
                    <Main/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
