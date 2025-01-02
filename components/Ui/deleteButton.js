"use client";

import { useState } from "react";

export default function DeleteButton({ slug }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (isDeleting) return; // Evitar que se elimine más de una vez

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/meals/${slug}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error deleting the meal");
      }

      // Aquí podrías manejar la redirección o actualización del UI
      alert("Meal deleted successfully"); // O hacer un redirect o actualizar estado
    } catch (error) {
      setError(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2 rounded-lg"
      disabled={isDeleting}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
