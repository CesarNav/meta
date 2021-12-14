// aqui va el css
import Table from "../components/table";
import Footer from "../components/footer";
import Project from "../components/Project";


function Projects() {
    return (
        <>
            <div className="Projects container mt-5">
                <div className="Projects-header container-fluid">
                    <h1 className="text-primary">
                        <i className="bi bi-book"> Proyectos</i>
                    </h1>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado de creacion</th>
                            <th scope="col">Estado de activacion</th>
                            <th scope="col">Fase</th>
                            <th scope="col">Dueño</th>
                            <th scope="col">Presupuesto</th>
                            <th scope="col">Objetivos Generales</th>
                            <th scope="col">Objetivos Especificos</th>
                            <th scope="col">Avances</th>
                        </tr>
                    </thead>
                    <Table projectid="1"
                        projectname="Test" 
                        projectCreation = "Test" 
                        projectActivation="Test" 
                        projectPhase ="Test" 
                        projectOwner = "Test"
                        projectBudget = "Test"
                        projectGenObjetive = "Test"
                        projectSpObjetive = "Test"
                        projectProgress = "Test"
                    />
                    <Table projectid="2"
                        projectname="ed" 
                        projectCreation = "ed" 
                        projectActivation="ed" 
                        projectPhase ="ed" 
                        projectOwner = "ed"
                        projectBudget = "ed"
                        projectGenObjetive = "ed"
                        projectSpObjetive = "ed"
                        projectProgress = "ed"
                    />
                </table>
            </div>
            <Footer />
        </>
    );
}

export default Projects;
  