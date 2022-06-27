import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Dimensions, ImageBackground} from 'react-native';
import { DataTable } from 'react-native-paper';


export default class DataScreen extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {
        return fetch ('https://reactnative.dev/movies.json')
                .then ((Response) => Response.json())
                .then ((responseJson) => {
                    this.setState ({
                        isLoading: false,
                        dataSource: responseJson.movies
                    })
                })
        
        .catch ((Error) => {
            console.log(Error)
        });
    }
    
    render () {
      
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/background1.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center'}} imageStyle={{opacity: 0.5}}>
                        <ActivityIndicator size='large' color='white' />
                    </ImageBackground>
                </View>
            );
        } else {
            
            let movies = this.state.dataSource.map((val,key) => {
                return (
                    <DataTable.Row key={key} style={styles.item}>
                        <DataTable.Cell style={{justifyContent: 'flex-start', flex: 0.5}} numeric>{val.id}</DataTable.Cell>
                        <DataTable.Cell style={{justifyContent: 'flex-start', flex: 1.5}}>{val.title}</DataTable.Cell>
                        <DataTable.Cell style={{justifyContent: 'flex-end'}} numeric>{val.releaseYear}</DataTable.Cell>
                    </DataTable.Row>
                    
                )   
            });

            const width = Dimensions.get('window').width
            const height = Dimensions.get('window').height
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/background1.jpg')} style={{width: '100%', height: '100%', alignItems:'center'}} imageStyle={{opacity: 0.5}}>
                        <DataTable style={{top:15, width: width * 0.85, height: height * 0.75, maxHeight:height * 0.75, backgroundColor: 'white', borderRadius: 15}}>
                            <DataTable.Header style={{backgroundColor: 'tomato', borderTopLeftRadius:10, borderTopRightRadius:10}}>
                                <DataTable.Title style={{justifyContent: 'flex-start', flex: 0.5}} numeric>
                                    <Text style={styles.titles}>ID</Text>
                                </DataTable.Title>

                                <DataTable.Title style={{justifyContent: 'flex-start', flex: 1.5}}>
                                    <Text style={styles.titles}>MOVIE NAMES</Text>
                                </DataTable.Title>

                                <DataTable.Title style={{justifyContent: 'flex-end'}} numeric>
                                    <Text style={styles.titles}>RELEASE YEAR</Text>
                                </DataTable.Title>
                            </DataTable.Header>

                            {movies}

                            <DataTable.Pagination
                                page={1}
                                numberOfPages={1}
                                onPageChange={(page)=>(page)}
                                label="1-5 of 5"
                                showFastPagination
                            />
                        </DataTable> 
                    </ImageBackground>
                </View>
                
            );
        }
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#ffa494',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 11,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        justifyContent: 'flex-start',
    },
    titles: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
    },
});