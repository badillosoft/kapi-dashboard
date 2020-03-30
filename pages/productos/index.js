import { useState, useEffect } from "react";

const columnas = [
    // Campos
    "articulo", // opcional
    "descrip", // requerido
    "tipo", // requerido
    "linea", // requerido
    "marca", // requerido
    "precio1", // opcional
    "existencia", // opcional
    "costo_u", // opcional
    "costo", // opcional
    "unidades_med", // requerido
    "por_recib", // opcional
    "por_surt", // opcional
    "impuesto", // opcional
    "minimo", // opcional
    "maximo", // opcional
    "observ", // requerido
    "costo_std", // opcional
    "kit", // opcional
    "serie", // opcional
    "lote", // opcional
    "invent", // opcional
    "imagen", // requerido
    "paraventa", // opcional
    "usuario", // requerido
    "usuhora", // requerido
    "usufecha", // requerido
    "exportado", // opcional
    "granel", // opcional
    "peso", // opcional
    "bloqueado", // opcional
    "u1", // opcional
    "ubicacion", // requerido
    "etiquetas", // opcional
    "oferta", // opcional
    "costopeps", // opcional
    "costoueps", // opcional
    "autor", // requerido
    "tema", // requerido
    "editorial", // requerido
    "fabricante", // requerido
    "preciousd", // opcional
    "costousd", // opcional
    "claveprodserv", // opcional
    "claveunidad", // opcional
    "hash", // requerido
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
    
    const name = "productos";

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
                    <div className="mr-2"><code>descrip</code></div>
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
                    <div className="mr-2"><code>linea</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>marca</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>unidades_med</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>observ</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>imagen</code></div>
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
                    <div className="mr-2"><code>usuhora</code></div>
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
                    <div className="mr-2"><code>ubicacion</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>autor</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>tema</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>editorial</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>fabricante</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>hash</code></div>
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
                    <div className="mr-2"><code>articulo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>precio1</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>existencia</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>costo_u</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>costo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>por_recib</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>por_surt</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>impuesto</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>minimo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>maximo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>costo_std</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">kit</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">serie</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">lote</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">invent</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">paraventa</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">exportado</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">granel</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>peso</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">bloqueado</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>u1</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>etiquetas</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">oferta</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>costopeps</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>costoueps</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>preciousd</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>costousd</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>claveprodserv</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>claveunidad</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
            </div>
        </>
    );
    const doForm = <DoFormularioNuevo />
    const render = status === "wait" ? form : doForm;
    return (
        <div className="flex-grow-1 d-flex flex-column border p-3 overflow-hidden">
            <div className="d-flex justify-content-between border-bottom w-100">
                <h1>Nuevo {"producto"}</h1>
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
            <h1>Módulo de <span className="text-primary">{"productos".toUpperCase()}</span></h1>
            <div className="d-flex justify-content-between mb-2">
                <span>Tabla de {"productos"}</span>
                <span>Total: 0</span>
                {
                    !panelOpen ? (
                        <div className="d-flex" onClick={() => {
                            setPanel(<FormularioNuevo />);
                            setPanelOpen(true);
                        }} style={{
                            cursor: "pointer"
                        }}>
                            <span className="mr-2"><strong>Nuevo {"producto"}</strong></span>
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