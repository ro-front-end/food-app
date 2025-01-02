"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/initdb"; // Asegúrate de importar correctamente la base de datos
import fs from "fs";

function isnvalidText(text) {
  return !text || text.trim() === "";
}
export async function shareMealSubmit(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isnvalidText(meal.title) ||
    isnvalidText(meal.summary) ||
    isnvalidText(meal.instructions) ||
    isnvalidText(meal.creator) ||
    isnvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}

export async function deleteMeal(slug) {
  try {
    // Obtener la comida para saber el nombre de la imagen asociada
    const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);

    if (!meal) {
      return {
        message: "Meal not found.",
      };
    }

    // Eliminar la comida de la base de datos
    db.prepare("DELETE FROM meals WHERE slug = ?").run(slug);

    // Eliminar la imagen del sistema de archivos
    const imagePath = `public/images/${meal.slug}.${meal.image
      .split(".")
      .pop()}`;
    try {
      fs.unlinkSync(imagePath); // Elimina la imagen
      console.log(`Image ${imagePath} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting image:", error);
    }

    // Revalidar la página de comidas para reflejar los cambios
    revalidatePath("/meals");

    // Redirigir al usuario de vuelta a la lista de comidas
    redirect("/meals");
  } catch (error) {
    console.error("Error in deleting meal:", error);
    return {
      message: "There was an error while deleting the meal. Please try again.",
    };
  }
}
