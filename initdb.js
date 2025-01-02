import sql from "better-sqlite3";

// Abre la base de datos de forma síncrona con better-sqlite3
const db = sql("meals.db");

// Dummy data para insertar
const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `1. Prepare the patty...`,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  // Otros platos aquí
];

// Crear tabla si no existe
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

// Función para insertar datos dummy
function initData() {
  const stmt = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `);

  dummyMeals.forEach((meal) => {
    stmt.run(meal);
  });
}

export function deleteMealFromDb(slug) {
  try {
    // Primero, obtener los datos del platillo para saber el nombre de la imagen
    const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);

    // Si no se encuentra el platillo, retornar false
    if (!meal) {
      console.error("Meal not found.");
      return false;
    }

    // Eliminar el platillo de la base de datos
    const stmt = db.prepare("DELETE FROM meals WHERE slug = ?");
    const result = stmt.run(slug);

    // Si no se eliminó ningún registro, retorna false
    if (result.changes === 0) {
      console.error("No meal was deleted.");
      return false;
    }

    // Eliminar la imagen asociada del sistema de archivos
    const imagePath = path.join(process.cwd(), "public", meal.image);
    fs.unlinkSync(imagePath); // Elimina la imagen del sistema de archivos

    console.log(`Meal ${slug} and its image have been deleted successfully.`);
    return true;
  } catch (error) {
    console.error("Error deleting meal", error);
    return false;
  }

// Inicializa los datos
initData();
