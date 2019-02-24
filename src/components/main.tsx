import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import * as React from 'react';
import coffeeCalculator from '../helpers/coffeeCalculator';
import Output from './output';

const style = () => createStyles({
    body: {
        paddingBottom: '2em',
        paddingTop: '0em'
    },
    container: {
        textAlign: 'center'
    },
    section: {
        paddingBottom: '1em',
        paddingTop: '1em'
    },
    slider: {
        padding: '22px 0px'
    },
    title: {
        paddingBottom: '1em',
        paddingTop: '1em'
    },
});

interface IState {
    strength: number
    waterOunces: number;
}

interface IProps extends WithStyles<typeof style> {
}

class Main extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            strength: 4,
            waterOunces: 0
        };

        this.handleStrength = this.handleStrength.bind(this);
    }

    public render(): React.ReactNode {
        const {classes} = this.props;
        const {strength} = this.state;

        return (
            <Grid container={true} alignItems='center' justify='center'>
                <Grid item={true} xs={12} sm={6}>
                    <div className={classes.container}>
                        <div className={classes.section}>
                            <Typography className={classes.title} color='secondary' variant='h4'>
                                How much coffee?
                            </Typography>
                            <Typography className={classes.body} color='secondary' variant='body1'>
                                Enter the amount of coffee you want to brew in oz. French presses typically hold between
                                12 and 50 oz.
                            </Typography>
                            <TextField
                                label='amount'
                                variant='outlined'
                                type='number'
                                id='waterOuncesText'
                                value={this.state.waterOunces}
                                onChange={event => {
                                    this.setState({waterOunces: parseInt(event.target.value, 10)})
                                }}
                            />
                        </div>
                        <div className={classes.section}>
                            <Typography className={classes.title} color='secondary' variant='h4'>
                                How strong do you want your coffee?
                            </Typography>
                            <Typography className={classes.body} color='secondary' variant='body1'>
                                Enter a number on a scale from 1 to 7. A higher strength results in a higher coffee to
                                water ratio.
                            </Typography>
                            <Typography id="label" variant='subheading'>{strength}</Typography>
                            <Grid container={true} justify='center' alignItems='center'>
                                <Grid item={true} xs={8} sm={6}>
                                    <Slider
                                        classes={{root: classes.slider}}
                                        value={this.state.strength}
                                        min={1}
                                        max={7}
                                        step={1}
                                        aria-labelledby="label"
                                        onChange={this.handleStrength}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.section}>
                            {this.calculateOutput()}
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }

    private handleStrength(event: any, value: React.SetStateAction<number>) {
        this.setState({
            strength: parseInt(value.toString(), 10)
        });
    }

    private calculateOutput() {
        const strength = this.state.strength;
        const waterOunces = this.state.waterOunces;

        const output = coffeeCalculator({
            strength,
            waterOunces
        });

        return <Output id='output' waterOunces={waterOunces} waterGrams={output.waterGrams}
                       coffeeGrams={output.coffeeGrams} ratio={output.ratio}/>
    }
}

export default withStyles(style)(Main);

export { Main }