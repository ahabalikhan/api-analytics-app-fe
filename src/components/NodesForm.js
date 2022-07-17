import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { addConsumerApplicationAndGetKeys } from '../ApiServices/consumer-application.service';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

const NodesForm = ({setKeys, setLoading}) => {
    const onFinish = (values) => {
        setLoading(true);
        addConsumerApplicationAndGetKeys(values.names)
            .then((res) => 
                {
                    setLoading(false);
                    setKeys({ applicationKey: res.data.applicationKey, secretKey: res.data.secretKey });
                })
            .catch((err) => {
                setLoading(false);
            });
    };

    return (
        <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish} initialValues={{ names: ['', ''] }}>
            <Form.List
                name="names"
                rules={[
                    {
                        validator: async (_, names) => {
                            if (!names || names.length < 2) {
                                return Promise.reject(new Error('Enter at least 2 nodes'));
                            }
                        },
                    },
                ]}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                label={index === 0 ? 'Nodes' : ''}
                                required={false}
                                key={field.key}
                            >
                                <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Please input node's name or delete this field.",
                                        },
                                    ]}
                                    noStyle
                                >
                                    <Input
                                        placeholder="Node name"
                                        style={{
                                            width: '60%',
                                        }}
                                    />
                                </Form.Item>
                                {fields.length > 1 ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"

                                        onClick={() => remove(field.name)}
                                    />
                                ) : null}
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                style={{
                                    width: '60%',
                                }}
                                icon={<PlusOutlined />}
                            >
                                Add Node
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    CLICK HERE TO GENERATE KEYS
                </Button>
            </Form.Item>
        </Form>
    );
};

export default NodesForm;