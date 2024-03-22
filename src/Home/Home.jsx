import "./Home.css"

import basedatos from "../Utils/basedatos.json"

export function Home(){
    console.log(basedatos.length[0])


            
    return(  //zona de renderizado
        <>
        <section className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                <h3><span className="fuente"> Sericios a un clic</span></h3>
                    <h2 className="text-muted">HOLA <span className="fuente">{basedatos[0].nombreUsuario}</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, error dicta sit temporibus modi similique commodi. Deleniti quis, vero quibusdam in possimus sunt, pariatur facere hic culpa laudantium minus quos eaque sequi? Sapiente similique dolore officiis corporis sed quam nobis nulla vel necessitatibus suscipit, aliquam tempora a adipisci nemo vitae?</p>
                </div>                    
                <div className="col-12 col-md-6">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Tu Grupo Familiar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="row">
                    
                   <div className="col-12 col-md-2 mt-3">
                        <i class="bi bi-person-hearts fs-1 fuente"></i>
                    </div> 
                    <div className="col-12 col-md-10 mt-3">
                        <br></br>
                        <h3><span className="fuente"> Medico de familia </span></h3>
                        <p>{basedatos[0].medicoDeFamilia} </p>
                        
                    </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-12 col-md-2 mt-5">
                        <i class="bi bi-person-arms-up fs-1 fuente"></i>
                    </div> 
                    <div className="col-12 col-md-10 mt-3">
                        <br></br>
                        <h3><span className="fuente"> Grupo Ingreso</span></h3>
                        <p>{basedatos[0].grupoDeIngreso}</p>
                   </div>
                <hr />
                </div>
                <div className="row">
                <div className="col-12 col-md-2 mt-5">
                        <i class="bi bi-handbag-fill fs-1 fuente"></i>
                    </div> 
                    <div className="col-12 col-md-10 mt-3">
                        <br></br>
                        <h3><span className="fuente"> IPS</span></h3>
                        <p>Activo </p>
                    </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-12 col-md-2 mt-5">
                        <i class="bi bi-buildings-fill fs-1 fuente"></i>
                    </div> 
                    <div className="col-12 col-md-10 mt-3">
                        <br></br>
                        <h3><span className="fuente"> IPS Actual</span></h3>
                        <p>Aguacatala</p>
                    </div>
                </div>
                </div>
            </div>

        </section>
        <hr />
        <section className=  "container">
            <div className="row">
                    <div className="col-12 col-md-5">
                        <h5>Paciente: {basedatos[5].nombreUsuario}, estas son tus proximas citas:</h5>
                    </div>
            </div>
        </section>
        <section className="container my-5">
            <div className="row row-cols-1 row-cols-md-3">
                {
                    basedatos[0].citasMedicas.map(function(cita){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow px-2">
                                    <h3>{cita.especialidad}</h3>
                                    <h4>Fecha:{cita.fecha}</h4>
                                    <h4>{cita.direccion}</h4>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}