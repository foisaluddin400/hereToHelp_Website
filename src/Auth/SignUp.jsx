import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import authBackground from '../assets/auth/auth.png';
import { Link } from 'react-router-dom';
export const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-16 py-8 rounded-[20px]  w-full max-w-[600px]">

        <h1 className="text-3xl font-semibold text-center text-white mb-6">Sign Up</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
          
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <label htmlFor="username">User Name</label>
            <Input
              placeholder="User Name"
              className="px-4 py-2 mt-2  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Form.Item
          
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Email"
              className="px-4 py-2 mt-2  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Form.Item
          
            name="phone"
            rules={[{ required: true, message: 'Please input your Contact Number!' }]}
          >
            <label htmlFor="phone">Contact Number</label>
            <Input
              placeholder="Contact Number"
              className="px-4 py-2 mt-2  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <label htmlFor="password">Password</label>
            <Input.Password
              placeholder="Password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
          >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input.Password
              placeholder="Confirm Password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-4 text-white bg-[#2E4CB9] rounded-[6px] hover:bg-blue-600"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center text-sm mt-4">
          {`already have an account?`}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
