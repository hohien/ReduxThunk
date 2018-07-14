

import React, {Component} from 'react';
import {Platform,FlatList, StyleSheet, Text, View} from 'react-native';

import {UserItem} from './UserItem';

import {fetchingUsers} from '../../../actions/FetchingUserAction';
import {connect} from 'react-redux';
class UserFlatList extends Component {

    componentDidMount(){
        this.props.fetchingUsers();
    }

    render() {
        return (
            <FlatList
                style ={styles.flatList}
                renderItem ={({item,index})=> {
                    return (
                        <UserItem 
                            user = {item}
                            index = {index}
                        />
                    );
                }}
                data ={this.props.userData}
                keyExtractor ={(item,index)=> item.id.value}
            />
        );
  }
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#F5FCFF',
  },
});

function mapStateToProps (state){
    return {
        userData:state.userList,
    }
}

export default connect(mapStateToProps,{fetchingUsers}) (UserFlatList);