function TaskList() {
  const tareas = ['Comprar pan', 'Estudiar React'];

  return (
    //Recorre el array (cada elemento es "tarea" y el indice "index") y crea un li con el atributo key (que es el indice) y dentro el nombre de la tarea
    <ul>
        {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
        ))}
    </ul>
  );
}

export default TaskList;