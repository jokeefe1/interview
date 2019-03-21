import React from 'react';
import { MENU_DATA } from '../../menuData';
import MenuButtons from '../MenuButtons/MenuButtons';
import TabCard from '../TabCard/TabCard';

export default class MenuItems extends React.Component {
    state = {
        data: [],
        filteredData: []
    };

    componentDidMount = () => {
        this.setState({ data: MENU_DATA });
    };

    handleFilter = e => {
        const { name } = e.target;
        const filteredData = this.state.data.filter(item => item.type === name);
        this.setState({ filteredData });
    };

    render() {
        const displayDefaultData = this.state.data.map(item => {
            return <TabCard item={item} handleFilter={this.handleFilter} />;
        });

        const displayFilteredData = this.state.filteredData.map(item => {
            return <TabCard item={item} handleFilter={this.handleFilter} />;
        });
        return (
            <>
                <MenuButtons handleFilter={this.handleFilter} />
                {this.state.filteredData.length === 0
                    ? displayDefaultData
                    : displayFilteredData}
            </>
        );
    }
}
