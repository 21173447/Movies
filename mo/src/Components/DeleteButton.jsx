import React from 'react';
import { toast } from 'react-toastify';

const DeleteButton = ({ itemId, itemType, onDeleteSuccess }) => {
  const handleDelete = async () => {

    const url = `http://localhost:3000/${itemType}/${itemId}`;
    console.log('Delete URL:', url);

    


    if (window.confirm(`Are you sure you want to delete this ${itemType}?`)) {
      try {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

       
        toast.success(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted successfully`);
        if (onDeleteSuccess) onDeleteSuccess();
      } catch (error) {
        console.error(`Error deleting ${itemType}:`, error);
        toast.error(`Failed to delete the ${itemType}`);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
