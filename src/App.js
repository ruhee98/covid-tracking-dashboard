import React from 'react';

import {Cards, Chart, Country} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    
    
    state = {
        data: {},
        country: '',
    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log(fetchedData);

        this.setState({data : fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        //fetch the data
        console.log(fetchedData);
        //set the state
        this.setState({data: fetchedData, country: country});
    }
    
    
    render(){
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Country handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;