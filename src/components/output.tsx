import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';
import { roundToTwo } from "../helpers/math";


interface IProps {
    waterGrams: number
    waterOunces: number
    coffeeGrams: number
    ratio: number
    id?: string
}

const Output = (props: IProps) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Coffee to Water Ratio</TableCell>
                    <TableCell align="right">Coffee (grams)</TableCell>
                    <TableCell align="right">Water (ounces)</TableCell>
                    <TableCell align="right">Water (grams)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1:{props.ratio}</TableCell>
                    <TableCell id='coffeeGrams' align='right'>{roundToTwo(props.coffeeGrams)} grams</TableCell>
                    <TableCell id='waterOunces' align='right'>{roundToTwo(props.waterOunces)} ounces</TableCell>
                    <TableCell id='waterGramsCell' align='right'>{roundToTwo(props.waterGrams)} grams</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default Output;