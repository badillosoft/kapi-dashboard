import { useState, useEffect } from "react";

const columnas = [
    // Campos
    "empleado", // requerido
    "tipo", // requerido
    "nombre", // requerido
    "usuario", // requerido
    "usufecha", // requerido
    "usuhora", // requerido
    "horaentrada", // requerido
    "horasalida", // requerido
    "foto", // requerido
    "pais", // requerido
    "cp", // requerido
    "calle", // requerido
    "numeroexterior", // requerido
    "numerointerior", // requerido
    "colonia", // requerido
    "poblacion", // requerido
    "ciudad", // requerido
    "estado", // requerido
    "telefono", // requerido
    "rfc", // requerido
    "curp", // requerido
    "numeroseguridadsocial", // requerido
    "departamento", // requerido
    "puesto", // requerido
    "banco", // requerido
    "cuentabanco", // requerido
    "inicioactividades", // requerido
    "tipocontrato", // requerido
    "tipojornada", // requerido
    "pagodesalario", // requerido
    "salariobasecotizacion", // opcional
    "riesgopuesto", // requerido
    "estadonomina", // requerido
    "antiguedad", // requerido
    "correo", // requerido
    "salariodiariointegrado", // opcional
    "observaciones", // requerido
    "bloqueado", // opcional
    "regimencontractual", // requerido
]

const usePostFormularioNuevo = (url, data = {}) => {
    const [status, setStatus] = useState("api-awake");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            console.log("fetch");
            setStatus("api-fetching");
            // data.id = `cliente${Math.random().toString(32).slice(2)}`;
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    // mode: "cors",
                    body: JSON.stringify(data)
                });
                const text = await response.arrayBuffer();
                console.log(`Error:`, text);
                if (!response.ok) {
                    console.log(response);
                    setStatus("api-error");
                    setError(`${response.statusText}/${text}`);
                    return;
                }
                setStatus("api-fetched");
                const json = await response.json();
                setResult(json);
                setStatus("api-done");
            } catch(error) {
                console.warn(`${error}`);
            }
        })();
    }, []);

    return [status, error, result];
};

const DoFormularioNuevo = props => {
    const { data } = props;
    
    const name = "personal";

    const url = `https://kapi-${name}.badillosoft.now.sh/api/${name}/new`;
    // const url = `http://localhost:3000/api/${name}/new`;

    const [status, error, result] = usePostFormularioNuevo(url, data);

    return (
        <div className="d-flex flex-column">
            <span>Status: <code>{status || "-"}</code></span>
            <span>Error: <code>{error || "-"}</code></span>
            <span>Result: <code>{result || "-"}</code></span>
        </div>
    );
};

const FormularioNuevo = props => {
    const [status, setStatus] = useState("wait");
    const form = (
        <>
            <div>
                <h3>Datos requeridos</h3>
            </div>
            <div className="p-3 border">
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>empleado</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>tipo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>nombre</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>usuario</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>usufecha</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="date" className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>usuhora</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>horaentrada</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>horasalida</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>foto</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>pais</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>cp</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>calle</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>numeroexterior</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>numerointerior</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>colonia</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>poblacion</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>ciudad</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>estado</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>telefono</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>rfc</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>curp</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>numeroseguridadsocial</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>departamento</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>puesto</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>banco</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>cuentabanco</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>inicioactividades</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="date" className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>tipocontrato</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>tipojornada</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>pagodesalario</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>riesgopuesto</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>estadonomina</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>antiguedad</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>correo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>observaciones</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>regimencontractual</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
            </div>
            <div>
                <h3>Datos opcionales</h3>
            </div>
            <div className="p-3 border">
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>salariobasecotizacion</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>salariodiariointegrado</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">bloqueado</span>
                    <input type="checkbox"  />
                </div>
            </div>
        </>
    );
    const doForm = <DoFormularioNuevo />
    const render = status === "wait" ? form : doForm;
    return (
        <div className="flex-grow-1 d-flex flex-column border p-3 overflow-hidden">
            <div className="d-flex justify-content-between border-bottom w-100">
                <h1>Nuevo {"personal"}</h1>
                <button className="btn btn-success" onClick={() => setStatus("do")}>Nuevo</button>
            </div>
            <div className="d-flex flex-column text-left overflow-auto">
                {render}
            </div>
        </div>
    );
};

const TablaConsultar = props => {
    const { columnas } = props;

    return (
        <table className="table" style={{
            overflowX: "auto"
        }}>
            <thead>
                <tr>
                    {columnas.filter(({ checked }) => checked).map(({ columnName }, index) => (
                        <th key={`column-${index}`}>{columnName.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
};

export default props => {
    const [panelOpen, setPanelOpen] = useState(false);
    const [panel, setPanel] = useState(null);

    const [currentColumnas, setCurrentColumnas] = useState([
        "id",
        ...columnas
    ].map((columnName, index) => {
        return { columnName, checked: index < 10 };
    }));

    return (
        <div className="d-flex flex-column container py-3 vh-100 overflow-hidden">
            <h1>Módulo de <span className="text-primary">{"personal".toUpperCase()}</span></h1>
            <div className="d-flex justify-content-between mb-2">
                <span>Tabla de {"personal"}</span>
                <span>Total: 0</span>
                {
                    !panelOpen ? (
                        <div className="d-flex" onClick={() => {
                            setPanel(<FormularioNuevo />);
                            setPanelOpen(true);
                        }} style={{
                            cursor: "pointer"
                        }}>
                            <span className="mr-2"><strong>Nuevo {"personal"}</strong></span>
                            <span className="text-success"><i className="fas fa-plus-circle" /></span>
                        </div>
                    ) : (
                            <button className="btn btn-link" onClick={() => {
                                setPanelOpen(false);
                            }}>cancelar</button>
                        )
                }
            </div>
            <div className="d-flex h-100 overflow-hidden">
                <div className="h-100 mr-4 border-bottom border-left border-right overflow-auto" style={{
                    minWidth: "200px"
                }}>
                    {currentColumnas.map(({ columnName, checked }, index) => (
                        <div key={`select-col-${index}`} className="d-flex flex-nowrap align-items-center">
                            <span className="mr-2">{columnName.toUpperCase()}</span>
                            <input type="checkbox" checked={checked} onChange={event => {
                                setCurrentColumnas([
                                    ...currentColumnas.slice(0, index),
                                    { columnName, checked: event.target.checked },
                                    ...currentColumnas.slice(index + 1),
                                ]);
                            }} />
                        </div>
                    ))}
                </div>
                <div className="h-100 flex-grow-1 mr-4 border-bottom border-left border-right overflow-auto">
                    <TablaConsultar columnas={currentColumnas} />
                </div>
                {
                    panelOpen ? (
                        <div className="flex-grow-1 d-flex flex-column h-100" style={{
                            minWidth: "50%"
                        }}>
                            {panel}
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
};