## Tests en Backend

Se implementaron pruebas unitarias y de integración para asegurar la calidad del código y la correcta funcionalidad de los endpoints de la API. A continuación, se detallan algunas de las pruebas realizadas:

### Pruebas de Repositorio
- `shouldSaveAndFetchEquipment`: Verifica que el equipo médico se guarda y recupera correctamente de la base de datos.
- `shouldFindEquipmentById`: Comprueba que se pueda encontrar un equipo por su ID.

### Pruebas de Servicio
- `shouldRegisterEquipment`: Asegura que el registro de un nuevo equipo funcione correctamente.
- `shouldDeleteEquipment`: Confirma que la eliminación de un equipo sea efectiva.

### Pruebas de Controlador
- `getEquipmentById`: Comprueba que la solicitud GET a `/equipment/{id}` devuelva el equipo correspondiente al ID proporcionado.
- `getAllEquipment`: Verifica que la solicitud GET a `/equipment` recupere una lista de todos los equipos.
- `addEquipment`: Testea que la solicitud POST a `/equipment` agregue correctamente un nuevo equipo.

### Pruebas de Integración
- `equipmentIntegrationTest`: Ejecuta una serie de pruebas para asegurar que los componentes del sistema funcionen juntos correctamente.

##Front 
- Traté de hacer lo que pude, la realidad es que no se me da muy bien el front
