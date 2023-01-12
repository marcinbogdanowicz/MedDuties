import React, { useState, useEffect } from 'react';
import { getKeyByValue } from './algorithm/utils';


export default function StatisticsTable(props) {
    const statistics = props.statistics;
    const keys = props.keys;
    const [rows, setRows] = useState(null)
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => {
        if (statistics) {
            const tableRows = statistics.map((item, i) => {
                const row = [];
                [...keys.keys()].forEach((key, j) => {
                    var elem;
                    if (key === 'name') {
                        elem = <th key={`${i}-${j}`} scope="row" data={key}>{item[key]}</th>;
                    } else {
                        elem = <td key={`${i}-${j}`} data={key}>{item[key]}</td>;
                    }
                    row.push(elem);
                });
                return <tr key={i}>{row}</tr>
            });
            setRows(tableRows);
            setSortBy(null);
        }
    }, [props.statistics]);

    const sort = (value) => {
        const key = getKeyByValue(keys, value);
        // Reverse order.
        if (sortBy === value) {
            const newRows = [...rows].reverse();
            setRows(newRows);
        // Sort in ascending order.
        } else {
            const byKey = (objA, objB) => {
                const valueA = objA.props.children.find(elem => elem.props.data === key).props.children;
                const valueB = objB.props.children.find(elem => elem.props.data === key).props.children;
                return (valueA - valueB);
            };
            const newRows = [...rows].sort(byKey);
            setRows(newRows);
            setSortBy(value);
        }        
    }

   return ( 
        <div className="statistics-content">
            <table className="stat-table table table-hover table-borderless table-sm">
                <thead>
                    <tr>
                        {
                            [...keys.values()].map((value, i) => {
                                if (!value) {
                                    return <th scope="col" key={i}>{value}</th>;
                                } else {
                                    return <th scope="col" key={i} onClick={() => sort(value)}>{value}{(sortBy && sortBy === value) && '↕'}</th>;
                                }
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}