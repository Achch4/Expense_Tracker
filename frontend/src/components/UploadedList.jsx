import React from "react";

const UploadedList = () => {
  const [transactions, setTransactions] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("statement", file);

    try {
      const data = await fileUpload(formData);
      setTransactions(data.transactions); // assuming your backend sends this back
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      UploadedList
      <table>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>amount</th>
          <th>category</th>
        </tr>
        <tr>
          <td>transaction.date</td>
          <td>transaction.description</td>
          <td>transaction.amount</td>
          <td>transaction.category</td>
        </tr>
      </table>
    </div>
  );
};

export default UploadedList;
