import React from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, ScrollView, Constants } from 'react-native';
import { SearchBar, Icon, Button } from 'react-native-elements';
import styles from '../styles/styles';
import fetchUrl from '../constants/constants.js';

class HomePage extends React.Component {
    state = {
        data: [],
        tempData: [],
        loading: false,
        searchText: '',
        searchPlaceHolder: "Type to search.."
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch("http://starlord.hackerearth.com/TopRamen")
            .then(res => res.json())
            .then((result) => {
                this.setState({ data: result });
                this.setState({
                    tempData: this.state.data.sort(function (a, b) {
                        let first = a["Top Ten"].toString().split(" ");
                        let second = b["Top Ten"].toString().split(" ");
                        if (first[0] > second[0])
                            return -1;
                        else
                            return 1;
                    })
                })})
                    .catch((err) => {
                        alert("Sorry some error happended")
                        console.log(err);
                    });
                this.setState({ loading: false });
            }

    compare = (a, b) => {
        let first = a["Top Ten"].toString().split(" ");
        let second = b["Top Ten"].toString().split(" ");
        if (first[0] > second[0])
            return 1;
        else
            return -1;
    }

    search = (text) => {
        var myPattern = new RegExp('(\\w*' + text + '\\w*)', 'gi');
        this.setState({ searchText: text });
        this.state.data.forEach((e) => {
            if (e.Variety.toString().match(myPattern)) {
                this.setState({ tempData: [e] });
            }
        });
    }

    clearSearch = () => {
        this.setState({ tempData: this.state.data });
    }

    getShowView(restaurant) {
        const topTen = "Top Ten"
        console.log(this.state.data)
        return <View style={styles.cardView}>
            <Text styles={styles.brandName}>{"Brand : " + restaurant.Brand}</Text>
            <View style={styles.splitContainer}>
                <Icon
                    size={20}
                    name='info'
                    type='feather'
                    color='#517fa4'
                />
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{restaurant.Variety}</Text>
            </View>
            <View style={styles.splitContainer}>
                <Icon
                    size={20}
                    name='compass'
                    type='foundation'
                    color='#517fa4'
                />
                <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 2 }}>{restaurant.Country}</Text>
                <Icon
                    size={20}
                    name='feather'
                    type='feather'
                    color='#517fa4'
                />
                <Text style={{ marginLeft: 10 }}>{restaurant.Style}</Text>
            </View>
            <View style={styles.splitContainer}>
                <Icon
                    size={20}
                    name='stars'
                    type='material'
                    color='#517fa4'
                />
                <Text style={{ marginLeft: 10, marginRight: 20, fontWeight: 'bold' }}>{restaurant.Stars}</Text>
                <Icon
                    size={20}
                    name='award'
                    type='feather'
                    color='#517fa4'
                />
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{restaurant["Top Ten"]}</Text>
            </View>
        </View>
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
                <SearchBar
                    placeholder={this.state.searchPlaceHolder}
                    onChangeText={this.search}
                    value={this.state.searchText}
                    platform="default"
                    lightTheme={true}
                    onClear={() => this.clearSearch()}
                    containerStyle={{ backgroundColor: 'transparent' }}
                />
                <ScrollView>
                    {this.state.tempData.map((element) => { return this.getShowView(element) })}
                </ScrollView>
                <ActivityIndicator animating={this.state.loading} style={{ margin: '35%', position: 'absolute' }} size="large" color="#ff8c00" />
            </SafeAreaView>
        );
    }
}
export default HomePage;