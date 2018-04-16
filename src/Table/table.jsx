import React from 'react'
import { Table, Button } from 'antd'
import 'antd/dist/antd.css'

import './style.less'

class TableView extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {

        };
    }

    handleClick(){
        console.log(123);
    }
    render(){
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (index) =>{
                return <Button key={index} onClick={this.handleClick}>搜索</Button>
            }
        }];
        return(
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}

export default TableView