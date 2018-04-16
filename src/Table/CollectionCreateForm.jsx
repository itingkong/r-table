import React from "react";
import {Input, Modal, Form} from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                newData: {
                    key: this.props.count,
                    name: '',
                    age: null,
                    address: '',
                },
            }
        }

        render() {
            const {visible, onCancel, onCreate, form} = this.props;
            const {getFieldDecorator} = form;
            const formItemLayout = {
                labelCol: {
                    xs: {span: 24},
                    sm: {span: 8},
                },
                wrapperCol: {
                    xs: {span: 24},
                    sm: {span: 16},
                },
            };
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="确认"
                    cancelText="取消"
                    onCancel={onCancel}
                    onOk={onCreate}>
                    <Form layout="vertical">
                        <FormItem
                            {...formItemLayout}
                            label="name">
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: 'Please input the title of collection!'}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="age">
                            {getFieldDecorator('age', {
                                rules: [{required: true, message: 'Please input the title of collection!'}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="address">
                            {getFieldDecorator('address', {
                                rules: [{required: true, message: 'Please input the title of collection!'}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

export default CollectionCreateForm