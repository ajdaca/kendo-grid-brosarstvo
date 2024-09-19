import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';

const App = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('http://173.212.203.236/BRODARSTVO/api/vratikomitente')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const onRowClick = (e) => {
        setSelectedItem(e.dataItem);
    };

    return (
        <div>
            <h1>Komitenti</h1>
            <Grid
                data={data}
                onRowClick={onRowClick}
                style={{ height: '400px' }}
            >
                <GridColumn field="sifra" title="Sifra" />
                <GridColumn field="naziv_firme" title="Naziv" />
                <GridColumn field="ptt" title="PTT" />
                <GridColumn field="pak" title="PAK" />
                <GridColumn field="mesto" title="Mesto" />
                <GridColumn field="ulica" title="Ulica" />
                <GridColumn field="drzava" title="Drzava" />
                <GridColumn field="opstina" title="Opstina" />
            </Grid>

            {selectedItem && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Detalji selektovanog komitenta:</h3>
                    <p><strong>Sifra:</strong> {selectedItem.sifra}</p>
                    <p><strong>Naziv:</strong> {selectedItem.naziv_firme}</p>
                    <p><strong>PTT:</strong> {selectedItem.ptt}</p>
                    <p><strong>PAK:</strong> {selectedItem.pak}</p>
                    <p><strong>Mesto:</strong> {selectedItem.mesto}</p>
                    <p><strong>Ulica:</strong> {selectedItem.ulica}</p>
                    <p><strong>Drzava:</strong> {selectedItem.drzava}</p>
                    <p><strong>Opstina:</strong> {selectedItem.opstina}</p>
                </div>
            )}
        </div>
    );
};

export default App;