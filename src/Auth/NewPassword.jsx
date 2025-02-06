import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import authBackground from "../assets/auth/auth.png";
import { Link } from "react-router-dom";
export const NewPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-28 py-20 rounded-[20px]  w-full max-w-[600px]">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Set New Password
        </h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <label htmlFor="password">Password</label>
            <Input.Password
              placeholder="Password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your Confirm password!" }]}
          >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input.Password
              placeholder="Confirm Password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item>
            <Link to={"/"}>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full py-4 text-white bg-[#2E4CB9] rounded-[6px] hover:bg-blue-600"
              >
                Continue
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
