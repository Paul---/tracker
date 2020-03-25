import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ListItem({ id, message, priority, createdOn }) {
  return (
    <tbody>
      <tr onClick={() => console.log(message)}>
        <td>{id}</td>
        <td>{message}</td>
        <td>{priority}</td>
        <td>{createdOn}</td>
      </tr>
    </tbody>
  );
}
