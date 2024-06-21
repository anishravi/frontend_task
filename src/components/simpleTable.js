import { React } from "react";
import { Table, Space, Button, Popconfirm } from "antd";

const SimpleTable = ({ dataSource,onDelete, onEdit }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => onEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button type="primary" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      {dataSource.length ? (
        <Table columns={columns} dataSource={dataSource} />
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
