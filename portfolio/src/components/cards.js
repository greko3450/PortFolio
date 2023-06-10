let lista = [
  {
    name: "PI Food api spoonacular",
    image: "https://res.cloudinary.com/ddhuh7eke/image/upload/v1686349657/samples/animals/food_nrlgoc.png",
    summary: "API de Spoonacular es una interfaz de programación de aplicaciones proporcionada por Spoonacular, una plataforma de comida y recetas. Ofrece una amplia gama de funcionalidades relacionadas con la alimentación y la cocina, incluyendo:",
    list: ["Nombre: Proporciona el nombre del plato o receta. Es el título o identificador del plato específico.",
    "Imagen: Devuelve una imagen del plato o receta correspondiente. Puede ser una representación visual del plato terminado para ayudarte a visualizar cómo se verá.",
    "Resumen del plato: Proporciona un resumen breve y conciso del plato o receta. Este resumen generalmente contiene información sobre los ingredientes principales y el estilo de cocina",
    "Nivel de comida saludable (health score): Esta característica clasifica la salud o calidad nutricional de un plato o receta. Proporciona una puntuación numérica que indica lo saludable que es el plato en términos generales.",
    "Paso a paso: Esta funcionalidad ofrece instrucciones detalladas paso a paso sobre cómo preparar el plato o receta. Puede incluir información sobre los ingredientes necesarios, el tiempo de cocción, los métodos de preparación y los pasos específicos que debes seguir para obtener el resultado deseado.",
    "Diets (Dietas): Esta funcionalidad te permite buscar recetas y platos que se ajusten a una dieta específica. Puedes especificar la dieta que deseas seguir, como vegetariana, vegana, sin gluten, sin lácteos, cetogénica, paleo, entre otras. El API de Spoonacular devolverá recetas y platos que cumplan con los criterios dietéticos seleccionados."]
  },
  {
    name: "PI Videogames api rawg.io ",
    image: "https://res.cloudinary.com/ddhuh7eke/image/upload/v1686349660/samples/animals/videogames_toe3pb.png",
    summary: "es una interfaz de programación de aplicaciones proporcionada por Rawg.io, una plataforma de videojuegos que ofrece una amplia gama de información y datos relacionados con los juegos. A continuación se detallan algunas de las funcionalidades que ofrece:",
    
    list: ["ype (Tipo): Este campo indica el tipo de objeto que se devuelve en la respuesta. Puede ser \"game\" para juegos individuales, \"genre\" para géneros de juegos, \"platform\" para plataformas de juegos, entre otros.",
    
    "Description (Descripción): Proporciona una descripción detallada del juego. Esto puede incluir información sobre la trama, mecánicas de juego, características destacadas y otros detalles relevantes.",
    
    "Platforms (Plataformas): Este campo muestra las plataformas en las que el juego está disponible. Puede incluir consolas como PlayStation, Xbox, Nintendo Switch, PC y otras plataformas de juego.",
    
    "Image (Imagen): Devuelve una imagen representativa del juego. Esto puede ser una captura de pantalla, arte de la portada u otra imagen relacionada con el juego.",
    
    "Release Date (Fecha de lanzamiento): Indica la fecha en la que el juego fue lanzado inicialmente. Esto te permite conocer cuándo se publicó el juego y evaluar su antigüedad o novedad.",
    
    "Rating (Calificación): Proporciona una calificación o puntuación del juego basada en las opiniones de los usuarios y la comunidad de Rawg.io. Esto puede ser una puntuación numérica o una valoración en forma de estrellas.",
    "Genre (Género): Indica el género o categoría del juego. Puede ser acción, aventura, rol, estrategia, deportes, entre otros. Esta información te ayuda a clasificar el juego según tus preferencias o buscar juegos específicos dentro de un género determinado."]
  },
  {
    name: "PF E-commerce Pasteleria Ohana",
    image: "https://res.cloudinary.com/ddhuh7eke/image/upload/v1686349658/samples/animals/pasteleria_fq9jom.png",
    summary: "e-commerce de productos de pastelería en línea Pastelería Ohana es un pequeño  emprendimiento familiar especializado en la elaboración de cupcakes, pasteles, tartas y chimuelos. Su enfoque principal es ofrecer productos de gran calidad y deliciosos sabores que deleiten a sus clientes. Con una atención meticulosa al detalle y una pasión por la repostería, Ohana se ha ganado una reputación por crear creaciones dulces excepcionales.",
    list: ["Tipo: Este campo indica el tipo de producto o elemento que se devuelve en la respuesta. Puede ser 'cupcake' para cupcakes individuales, 'cake' para pasteles, 'tart' para tartas, 'chimuelo' para chimuelos, entre otros.",
    "Descripción: Proporciona una descripción detallada del producto de pastelería. Esto puede incluir información sobre los sabores, texturas, ingredientes destacados y otros detalles relevantes que describen la deliciosa experiencia de probarlo.",
    
    "Ingredientes: Este campo muestra los ingredientes que componen el producto de pastelería. Puede incluir elementos como harina, azúcar, huevos, mantequilla, frutas, cremas y otros ingredientes utilizados en la elaboración del producto.",
    
    "Imagen: Devuelve una imagen representativa del producto de pastelería. Puede ser una fotografía del cupcake, pastel, tarta o chimuelo, mostrando su aspecto visualmente apetitoso y decoración detallada.",
    
    "Registro de usuarios: Los usuarios pueden crear una cuenta en la plataforma proporcionando su información personal, como nombre, dirección de correo electrónico y contraseña. Una vez registrados, los usuarios pueden agregar varias direcciones de entrega a su perfil. También tienen la opción de editar o eliminar las direcciones existentes según sea necesario y poder editar sus datos.",
    "Autenticación con Google: Los usuarios tienen la opción de iniciar sesión en la plataforma utilizando sus cuentas de Google. Esto simplifica el proceso de inicio de sesión, ya que no necesitan crear una cuenta nueva y pueden acceder rápidamente a la plataforma, la plataforma permite a los usuarios crear una cuenta nueva proporcionando información como nombre, dirección de correo electrónico y contraseña, si no desean autenticarse con Google.", 
    "Notificaciones por correo electrónico: Una vez que los usuarios se registran por autenticación la plataforma envía notificaciones por correo electrónico para mantenerlos informados de su registro y una bienvenida.",
    "Carrito de compras: Los usuarios pueden seleccionar múltiples productos de la tienda y agregarlos al carrito de compras. Pueden especificar la cantidad deseada y ver el precio total en función de las cantidades y los precios individuales de cada producto.",
    
    "Procesamiento de pagos: Para facilitar las transacciones, la plataforma integra el servicio de pagos de Stripe. Los usuarios pueden realizar pagos seguros utilizando sus tarjetas de crédito o débito, asegurando una experiencia de compra confiable.",
    "Favoritos, calificación y comentarios: Después de realizar una compra, los usuarios tienen la opción de agregar un producto a favoritos, valoración y dejar comentarios sobre los productos adquiridos. Esto ayuda a otros usuarios a tomar decisiones informadas y proporciona retroalimentación valiosa a la pastelería.",
    
    "Ordenar y filtrar productos: La plataforma permite a los usuarios ordenar los productos de acuerdo con diferentes criterios, como popularidad, precio o nombre. También pueden aplicar filtros para buscar productos específicos, como por tipo, sabor o ingredientes.",
    
    "Administración de postres: Los administradores de la plataforma tienen acceso a una interfaz especial que les permite crear nuevos postres. Pueden agregar información detallada, incluyendo descripciones, imágenes y precios. Además, los administradores pueden actualizar y cambiar la imagen de los postres existentes según sea necesario"
    ]
  }
]

module.exports = lista;